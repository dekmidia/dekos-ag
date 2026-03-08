import pptxgen from "pptxgenjs";
import fs from "fs";
import path from "path";

// Main function
async function main() {
    const args = process.argv.slice(2);
    const inputIndex = args.indexOf("--input");
    const outputIndex = args.indexOf("--output");
    const themeIndex = args.indexOf("--tema");

    if (inputIndex === -1 || !args[inputIndex + 1]) {
        console.error("Uso: npx ts-node criar-apresentacao.ts --input briefing.json [--output saida.pptx] [--tema tema]");
        process.exit(1);
    }

    const inputFile = args[inputIndex + 1];
    const outputFile = outputIndex !== -1 ? args[outputIndex + 1] : "./apresentacao.pptx";
    const theme = themeIndex !== -1 ? args[themeIndex + 1] : "gravity-dark";

    try {
        const rawData = fs.readFileSync(inputFile, "utf8");
        const briefing = JSON.parse(rawData);

        const pptx = new pptxgen();

        // Configurar o template com base no tema
        let bgColor = "0D0D12";
        let textColor = "FFFFFF";
        let accentColor = "7B61FF"; // violeta

        if (theme === "tech-innovation") {
            bgColor = "001F3F";
            accentColor = "0074D9";
        } else if (theme === "midnight-galaxy") {
            bgColor = "1A0B2E";
            accentColor = "9D4EDD";
        } else if (theme === "corporate-light") {
            bgColor = "FFFFFF";
            textColor = "333333";
            accentColor = "0056B3";
        }

        pptx.layout = "LAYOUT_16x9";
        pptx.defineSlideMaster({
            title: "MASTER_SLIDE",
            background: { color: bgColor },
            objects: [
                { rect: { x: 0, y: "90%", w: "100%", h: "10%", fill: { color: accentColor } } }
            ]
        });

        const slides = briefing.slides || [];

        for (const slide of slides) {
            const s = pptx.addSlide({ masterName: "MASTER_SLIDE" });

            const title = slide.titulo || "";
            const subtitle = slide.subtitulo || "";

            if (slide.tipo === "capa") {
                s.addText(briefing.empresa || "", { x: 0.5, y: 0.5, w: "90%", h: 1, fontSize: 24, color: accentColor, bold: true });
                s.addText(title, { x: 0.5, y: 2.5, w: "90%", h: 1.5, fontSize: 48, color: textColor, bold: true });
                s.addText(subtitle, { x: 0.5, y: 4, w: "90%", h: 1, fontSize: 24, color: textColor });
                s.addText(briefing.tagline || "", { x: 0.5, y: 5.5, w: "90%", h: 1, fontSize: 18, color: "CCCCCC" });
            } else if (slide.tipo === "problema" || slide.tipo === "solucao" || slide.tipo === "kpis" || slide.tipo === "generico" || slide.tipo === "cta") {
                s.addText(title, { x: 0.5, y: 0.5, w: "90%", h: 1, fontSize: 36, color: accentColor, bold: true });
                if (subtitle) {
                    s.addText(subtitle, { x: 0.5, y: 1.5, w: "90%", h: 1, fontSize: 20, color: "CCCCCC" });
                }

                let contentsY = subtitle ? 2.5 : 2;

                if (slide.itens) {
                    const itemCount = slide.itens.length;
                    const itemWidth = 8.5 / itemCount;
                    slide.itens.forEach((item: any, idx: number) => {
                        const xPos = 0.5 + (idx * itemWidth);
                        if (item.valor) {
                            s.addText(item.valor, { x: xPos, y: contentsY, w: itemWidth - 0.2, h: 1, fontSize: 32, color: accentColor, bold: true, align: "center" });
                        }
                        if (item.label) {
                            s.addText(item.label, { x: xPos, y: contentsY + 1, w: itemWidth - 0.2, h: 0.5, fontSize: 18, color: textColor, align: "center" });
                        }
                        if (item.desc) {
                            s.addText(item.desc, { x: xPos, y: contentsY + 1.5, w: itemWidth - 0.2, h: 1, fontSize: 14, color: "AAAAAA", align: "center" });
                        }
                    });
                }

                if (slide.corpo) {
                    s.addText(slide.corpo, { x: 0.5, y: contentsY, w: "90%", h: 3, fontSize: 22, color: textColor });
                }
            }
        }

        const outputDir = path.dirname(outputFile);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        await pptx.writeFile({ fileName: outputFile });
        console.log(`✅ Apresentação gerada com sucesso em: ${outputFile}`);
    } catch (err: any) {
        console.error("❌ Erro ao gerar apresentação:", err.message);
        process.exit(1);
    }
}

main();
