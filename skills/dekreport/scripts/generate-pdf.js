// Gera PDF da versão de impressão limpa
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const dir = path.resolve(__dirname, 'clientes/reports/Dr_Pedro_Carvalho/Fevereiro-2026');
    const htmlPath = path.join(dir, 'relatorio-print.html');
    const pdfPath = path.join(dir, 'relatorio.pdf');

    console.log('Abrindo navegador...');
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 900 });

    console.log('Carregando HTML limpo...');
    await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
    });

    // Aguarda fontes carregarem
    await new Promise(r => setTimeout(r, 2500));

    console.log('Gerando PDF...');
    await page.pdf({
        path: pdfPath,
        format: 'A4',
        landscape: false,
        printBackground: true,
        margin: { top: '15mm', right: '15mm', bottom: '15mm', left: '15mm' }
    });

    await browser.close();
    console.log('PDF gerado:', pdfPath);
})();
