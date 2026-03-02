---
title: Docs Elementor
author: DekMidia
tags: [docs]
---
# 📙 DEK-OS — Elementor Developer Playbook
> SOP Operacional | Versão 1.0 | DekMidia  
> ⚡ Atualizado para **Elementor 3.35 + Theme Builder + Widget Output Caching** — Março/2026

---

## Índice

1. [⚡ O Ecossistema Elementor para Desenvolvedores](#0-o-ecossistema-elementor-para-desenvolvedores)
2. [Estrutura de Addons](#1-estrutura-de-addons)
3. [Widgets — Criação e Customização](#2-widgets-criacao-e-customizacao)
4. [Controls — Tipos e Uso](#3-controls-tipos-e-uso)
5. [Hooks PHP e JavaScript](#4-hooks-php-e-javascript)
6. [Scripts & Styles](#5-scripts-styles)
7. [Dynamic Tags](#6-dynamic-tags)
8. [Form Actions e Form Fields](#7-form-actions-e-form-fields)
9. [Theme Builder — Locations e Conditions](#8-theme-builder-locations-e-conditions)
10. [Data Structure](#9-data-structure)
11. [Performance e Otimização](#10-performance-e-otimizacao)
12. [Checklists Rápidos](#11-checklists-rapidos)

---

## 0. ⚡ O Ecossistema Elementor para Desenvolvedores

> **O mais importante:** O Elementor não é só um page builder — é um framework completo de desenvolvimento visual. Widgets, controls, hooks, dynamic tags e o theme builder formam uma plataforma extensível que permite criar soluções profissionais sem modificar o core. Entender essa arquitetura é o que separa quem usa do que constrói.

### O que é possível construir

O Elementor fornece um framework que permite a desenvolvedores externos estender sua funcionalidade, disponibilizando ferramentas para criadores implementarem designs sofisticados e funcionalidades avançadas, tudo dentro do framework Elementor.

**O mapa de extensibilidade:**

| Camada | O que você pode criar | Quando usar |
|--------|----------------------|-------------|
| Widgets | Novos blocos visuais arrastáveis | Componentes personalizados de UI |
| Controls | Novos campos de input no painel | Inputs customizados nos widgets |
| Dynamic Tags | Dados dinâmicos de qualquer fonte | Conteúdo variável por contexto |
| Form Actions | Ações pós-envio de formulário | Integrações com CRMs e APIs |
| Form Fields | Novos tipos de campo no formulário | Inputs especializados (CPF, CEP etc.) |
| Theme Conditions | Novas condições de exibição | Display condicional de templates |
| Theme Locations | Locais de template customizados | Temas "Elementor Compatible" |
| Hooks PHP/JS | Modificar comportamento nativo | Extend sem alterar o core |

### Versões do Elementor

| Versão | O que inclui | Quando usar |
|--------|-------------|-------------|
| Elementor Core (grátis) | Widgets básicos, editor, controls padrão | Desenvolvimento base de widgets |
| Elementor Pro (pago) | Theme Builder, Dynamic Tags, Form, Popup | Projetos de site completo |
| Elementor Beta Developer | Features em desenvolvimento | Testes e preparação para updates |

> ⚠️ **Dynamic Tags funcionam APENAS com Elementor Pro ativo.** A estrutura é definida no Core, mas a execução exige Pro. Sempre verificar antes de implementar.

### Novidades ativas (2025-2026)

| Recurso | O que muda | Ação |
|---------|-----------|------|
| **Widget Output Caching** | Cache de renderização de widget no servidor | Implementar em widgets pesados |
| **Widget DOM Optimization** | Remover `div.elementor-widget-container` interno | Ativar para HTML mais limpo |
| **Visual Choice Control** | Novo control com opções estilizadas como imagens | Usar em lugar de `choose` visual |
| **Interactivity API** | Widgets interativos sem JS pesado | Avaliar em novos projetos |
| **CSS Selectors avançados** | Transformar dados de control em CSS direto | Substituir JS de estilo simples |

### SOP — Framework de decisão para desenvolvimento

```
Preciso de um novo componente visual?
  └── Criar um Widget customizado

Preciso de um novo campo de input no painel?
  └── Criar um Control customizado

Preciso de dados dinâmicos (título do post, campo ACF, API)?
  └── Criar uma Dynamic Tag (requer Elementor Pro)

Preciso de uma ação após envio de formulário?
  └── Criar um Form Action (requer Elementor Pro)

Preciso modificar comportamento existente sem tocar no core?
  └── Usar Hooks PHP ou JS

Preciso controlar onde um template é exibido?
  └── Usar Theme Conditions (requer Elementor Pro)

Preciso que meu tema suporte o Theme Builder?
  └── Implementar Theme Locations
```

---

## 1. Estrutura de Addons

### O que é um Elementor Addon

Elementor addons são basicamente plugins WordPress que adicionam funcionalidades ao Elementor. Antes de criar addons, é necessário ter base em criação de plugins WordPress. Ao criar addons, todos os padrões e boas práticas de código WordPress devem ser implementados, além dos padrões e boas práticas do Elementor.

### Estrutura de pastas obrigatória

```
elementor-addon/
|
├─ widgets/
|  ├─ widget-um.php
|  └─ widget-dois.php
|
├─ controls/
|  └─ control-customizado.php
|
├─ assets/
|  ├─ js/
|  |  └─ widget-script.js
|  └─ css/
|     └─ widget-style.css
|
└─ elementor-addon.php   ← arquivo principal (bootstrap)
```

### O arquivo principal do addon

```php
<?php
/**
 * Plugin Name: Meu Elementor Addon
 * Description: Addon customizado para o projeto Antigravity.
 * Version:     1.0.0
 * Author:      DekMidia
 * Author URI:  https://dekmidia.com.br/
 * Text Domain: meu-elementor-addon
 *
 * Requires Plugins: elementor
 * Elementor tested up to: 3.35.0
 * Elementor Pro tested up to: 3.35.0
 */

// Impedir acesso direto
if ( ! defined( 'ABSPATH' ) ) exit;

function registrar_widgets_addon( $widgets_manager ) {
    require_once( __DIR__ . '/widgets/widget-um.php' );
    $widgets_manager->register( new \Meu_Widget_Um() );
}
add_action( 'elementor/widgets/register', 'registrar_widgets_addon' );
```

### Componentes do addon principal

| Componente | Propósito | Hook de registro |
|-----------|----------|-----------------|
| Main Class | Wrapper do addon, verifica dependências, carrega arquivos | `plugins_loaded` |
| Widgets | Novos blocos visuais | `elementor/widgets/register` |
| Controls | Novos inputs de painel | `elementor/controls/register` |
| Dynamic Tags | Tags de dados dinâmicos | `elementor/dynamic_tags/register` |
| Form Actions | Ações de formulário | `elementor/forms/register_action` |
| Categorias customizadas | Agrupamento de widgets no painel | `elementor/elements/categories_registered` |

### Verificação de compatibilidade

```php
// Verificar se Elementor está ativo antes de carregar o addon
function verificar_elementor() {
    if ( ! did_action( 'elementor/loaded' ) ) {
        add_action( 'admin_notices', function() {
            echo '<div class="error"><p>Meu Addon requer o Elementor ativo.</p></div>';
        });
        return;
    }
    // Carregar o addon normalmente
    require_once( __DIR__ . '/classes/main.php' );
}
add_action( 'plugins_loaded', 'verificar_elementor' );
```

### SOP — Criação de novo addon

- [ ] Criar pasta em `wp-content/plugins/nome-do-addon/`
- [ ] Criar `elementor-addon.php` com header comments corretos
- [ ] Adicionar `Requires Plugins: elementor` no header
- [ ] Implementar verificação de dependência antes de carregar
- [ ] Criar subpastas: `widgets/`, `controls/`, `assets/js/`, `assets/css/`
- [ ] Registrar widgets via `elementor/widgets/register`
- [ ] Testar com Elementor Core e verificar compatibilidade com Pro
- [ ] Zipar pasta e fazer upload via WP Admin > Plugins para validar instalação

---

## 2. Widgets — Criação e Customização

### Anatomia de um Widget

O Elementor tem dezenas de widgets úteis no painel de widgets, divididos em categorias. Cada widget tem um conjunto de controls customizados (campos de input) que permitem ao usuário inserir dados.

Todo widget estende `\Elementor\Widget_Base` e obrigatoriamente implementa:

| Método | Obrigatório | O que retorna |
|--------|------------|--------------|
| `get_name()` | Sim | String única — slug do widget |
| `get_title()` | Sim | String traduzível — nome exibido no painel |
| `get_icon()` | Não | String — ícone Eicon ou Dashicon |
| `get_categories()` | Não | Array — categorias do painel (`basic`, `general`, custom) |
| `get_keywords()` | Não | Array — termos de busca no painel |
| `register_controls()` | Não | void — define os controls do widget |
| `render()` | Sim | void — HTML do frontend |
| `content_template()` | Sim | void — template JS para preview no editor |

### Widget mínimo funcional

```php
<?php
class Meu_Widget extends \Elementor\Widget_Base {

    public function get_name(): string {
        return 'meu_widget';
    }

    public function get_title(): string {
        return esc_html__( 'Meu Widget', 'meu-addon' );
    }

    public function get_icon(): string {
        return 'eicon-code';
    }

    public function get_categories(): array {
        return [ 'basic' ];
    }

    protected function render(): void {
        $settings = $this->get_settings_for_display();
        echo '<p>' . esc_html( $settings['texto'] ) . '</p>';
    }

    protected function content_template(): void {
        ?>
        <p>{{ settings.texto }}</p>
        <?php
    }
}
```

### Widget com Controls (Content + Style)

```php
protected function register_controls(): void {

    // ── ABA CONTENT ──────────────────────────────────────
    $this->start_controls_section( 'section_content', [
        'label' => esc_html__( 'Conteúdo', 'meu-addon' ),
        'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
    ]);

    $this->add_control( 'titulo', [
        'label'   => esc_html__( 'Título', 'meu-addon' ),
        'type'    => \Elementor\Controls_Manager::TEXT,
        'default' => esc_html__( 'Título padrão', 'meu-addon' ),
    ]);

    $this->end_controls_section();

    // ── ABA STYLE ────────────────────────────────────────
    $this->start_controls_section( 'section_style', [
        'label' => esc_html__( 'Estilo', 'meu-addon' ),
        'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
    ]);

    $this->add_control( 'cor_titulo', [
        'label'     => esc_html__( 'Cor do Título', 'meu-addon' ),
        'type'      => \Elementor\Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .meu-titulo' => 'color: {{VALUE}};',
        ],
    ]);

    $this->end_controls_section();
}
```

### Gerenciamento de Widgets existentes

```php
// Remover widget nativo do Elementor
function remover_widgets( $widgets_manager ) {
    $widgets_manager->unregister( 'heading' );    // remove widget Heading
    $widgets_manager->unregister( 'image' );      // remove widget Image
}
add_action( 'elementor/widgets/register', 'remover_widgets', 20 );

// Adicionar categoria customizada de widgets
function adicionar_categoria( $elements_manager ) {
    $elements_manager->add_category( 'dekmidia', [
        'title' => esc_html__( 'DekMidia', 'meu-addon' ),
        'icon'  => 'fa fa-plug',
    ]);
}
add_action( 'elementor/elements/categories_registered', 'adicionar_categoria' );
```

### SOP — Criação de novo Widget

- [ ] Criar arquivo PHP em `widgets/nome-do-widget.php`
- [ ] Estender `\Elementor\Widget_Base`
- [ ] Implementar `get_name()` com slug único (sem espaços, sem maiúsculas)
- [ ] Implementar `get_title()` com `esc_html__()`
- [ ] Definir `get_categories()` — usar categoria própria do addon
- [ ] Criar `register_controls()` com seções Content e Style separadas
- [ ] Implementar `render()` com `$this->get_settings_for_display()`
- [ ] Implementar `content_template()` com JS template correspondente
- [ ] Registrar via `elementor/widgets/register` no arquivo principal
- [ ] Testar no editor: preview em tempo real funcionando
- [ ] Testar no frontend: HTML renderizado corretamente

---

## 3. Controls — Tipos e Uso

### O que são Controls

Elementor Editor Controls são campos de input e elementos de UI usados para construir interfaces. Controls permitem que usuários customizem configurações disponíveis no painel e alterem o design no preview. O Elementor inclui uma ampla gama de controls nativos, usados em widgets e painéis do editor para coletar dados do usuário e gerar output customizado.

### Categorias de Controls

| Categoria | Exemplos | Uso típico |
|----------|---------|-----------|
| **Data Controls** | Text, Textarea, Number, Color, Select, Switcher | Inputs de conteúdo e configuração |
| **MultiValue Controls** | URL, Media, Icons, Box Shadow, Text Shadow | Inputs com múltiplos valores relacionados |
| **Unit Controls** | Slider, Dimensions | Medidas CSS com unidade |
| **UI Controls** | Heading, Divider, Alert, Raw HTML | Elementos visuais sem dados |
| **Group Controls** | Typography, Border, Background, Image Size | Conjuntos de controls agrupados |

### Controls mais usados — referência rápida

```php
// TEXT — campo de texto simples
$this->add_control( 'titulo', [
    'label'       => 'Título',
    'type'        => \Elementor\Controls_Manager::TEXT,
    'default'     => 'Texto padrão',
    'placeholder' => 'Digite o título',
]);

// TEXTAREA — texto multilinha
$this->add_control( 'descricao', [
    'label' => 'Descrição',
    'type'  => \Elementor\Controls_Manager::TEXTAREA,
    'rows'  => 5,
]);

// COLOR — seletor de cor com CSS Selector
$this->add_control( 'cor_fundo', [
    'label'     => 'Cor de Fundo',
    'type'      => \Elementor\Controls_Manager::COLOR,
    'selectors' => [ '{{WRAPPER}} .box' => 'background-color: {{VALUE}};' ],
]);

// SELECT — lista de opções
$this->add_control( 'alinhamento', [
    'label'   => 'Alinhamento',
    'type'    => \Elementor\Controls_Manager::SELECT,
    'options' => [
        'left'   => 'Esquerda',
        'center' => 'Centro',
        'right'  => 'Direita',
    ],
    'default' => 'left',
]);

// SWITCHER — toggle on/off
$this->add_control( 'mostrar_botao', [
    'label'   => 'Mostrar Botão',
    'type'    => \Elementor\Controls_Manager::SWITCHER,
    'default' => 'yes',
]);

// SLIDER — valor com unidade
$this->add_control( 'tamanho_fonte', [
    'label'      => 'Tamanho da Fonte',
    'type'       => \Elementor\Controls_Manager::SLIDER,
    'size_units' => [ 'px', 'em', 'rem' ],
    'range'      => [ 'px' => [ 'min' => 10, 'max' => 100 ] ],
    'default'    => [ 'unit' => 'px', 'size' => 16 ],
    'selectors'  => [ '{{WRAPPER}} p' => 'font-size: {{SIZE}}{{UNIT}};' ],
]);

// MEDIA — upload de imagem
$this->add_control( 'imagem', [
    'label'   => 'Imagem',
    'type'    => \Elementor\Controls_Manager::MEDIA,
    'default' => [ 'url' => \Elementor\Utils::get_placeholder_image_src() ],
]);

// URL — campo de link
$this->add_control( 'link', [
    'label'         => 'Link',
    'type'          => \Elementor\Controls_Manager::URL,
    'show_external' => true,
    'default'       => [ 'url' => '', 'is_external' => false ],
]);
```

### Group Controls — uso

```php
// TYPOGRAPHY — controle completo de tipografia
$this->add_group_control(
    \Elementor\Group_Control_Typography::get_type(),
    [
        'name'     => 'tipografia_titulo',
        'selector' => '{{WRAPPER}} h2',
    ]
);

// BACKGROUND — fundo completo (cor, gradiente, imagem)
$this->add_group_control(
    \Elementor\Group_Control_Background::get_type(),
    [
        'name'     => 'fundo_secao',
        'types'    => [ 'classic', 'gradient' ],
        'selector' => '{{WRAPPER}} .secao',
    ]
);

// BORDER — borda completa
$this->add_group_control(
    \Elementor\Group_Control_Border::get_type(),
    [
        'name'     => 'borda_card',
        'selector' => '{{WRAPPER}} .card',
    ]
);

// BOX SHADOW
$this->add_group_control(
    \Elementor\Group_Control_Box_Shadow::get_type(),
    [
        'name'     => 'sombra_card',
        'selector' => '{{WRAPPER}} .card',
    ]
);
```

### Conditional Display — mostrar/ocultar controls

```php
// Mostrar control 'cor_botao' apenas quando 'mostrar_botao' = 'yes'
$this->add_control( 'cor_botao', [
    'label'     => 'Cor do Botão',
    'type'      => \Elementor\Controls_Manager::COLOR,
    'condition' => [
        'mostrar_botao' => 'yes',
    ],
]);

// Condição múltipla (AND lógico)
$this->add_control( 'texto_botao', [
    'label'     => 'Texto do Botão',
    'type'      => \Elementor\Controls_Manager::TEXT,
    'condition' => [
        'mostrar_botao' => 'yes',
        'tipo_botao'    => 'primario',
    ],
]);
```

### Responsive Controls

```php
// Control responsivo — valor diferente por breakpoint
$this->add_responsive_control( 'padding_secao', [
    'label'      => 'Padding',
    'type'       => \Elementor\Controls_Manager::DIMENSIONS,
    'size_units' => [ 'px', 'em', '%' ],
    'selectors'  => [
        '{{WRAPPER}} .secao' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
    ],
]);
```

### Organização de Controls — Tabs e Sections

```php
// SEÇÕES — agrupa controls com título
$this->start_controls_section( 'section_imagem', [
    'label' => 'Configurações de Imagem',
    'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
]);
// ... controls ...
$this->end_controls_section();

// TABS CUSTOMIZADAS (além de Content e Style)
$this->start_controls_tabs( 'tabs_estados' );

    $this->start_controls_tab( 'tab_normal', [ 'label' => 'Normal' ]);
    // ... controls estado normal ...
    $this->end_controls_tab();

    $this->start_controls_tab( 'tab_hover', [ 'label' => 'Hover' ]);
    // ... controls estado hover ...
    $this->end_controls_tab();

$this->end_controls_tabs();

// POPOVERS — controls em janela flutuante
$this->add_control( 'toggle_sombra', [
    'label' => 'Sombra',
    'type'  => \Elementor\Controls_Manager::POPOVER_TOGGLE,
]);
$this->start_popover();
// ... controls dentro do popover ...
$this->end_popover();
```

---

## 4. Hooks PHP e JavaScript

### O que são Hooks no Elementor

O Elementor tem muitos hooks interessantes que permitem aos desenvolvedores alterar configurações padrão e até mesmo estender o Elementor com novas funcionalidades. Um hook ajuda desenvolvedores a injetar funções ou editar configurações padrão. Action hooks são usados para executar código customizado quando certos eventos ocorrem. Filter hooks são usados para retornar valores modificados para certos parâmetros.

### Hooks PHP essenciais — Referência

| Hook | Tipo | Quando dispara | Uso |
|------|------|---------------|-----|
| `elementor/loaded` | Action | Elementor carregado | Verificar dependências |
| `elementor/init` | Action | Elementor inicializado | Registrar componentes |
| `elementor/widgets/register` | Action | Registro de widgets | Registrar widgets |
| `elementor/controls/register` | Action | Registro de controls | Registrar controls |
| `elementor/dynamic_tags/register` | Action | Registro de tags | Registrar dynamic tags |
| `elementor/frontend/after_enqueue_styles` | Action | Styles do frontend enfileirados | Adicionar estilos customizados |
| `elementor/preview/enqueue_styles` | Action | Styles do preview | Estilos para o editor |
| `elementor/editor/after_enqueue_scripts` | Action | Scripts do editor enfileirados | Scripts no painel editor |
| `elementor/widget/{widget_name}/skins_init` | Action | Init de skins | Registrar skins de widget |

### Hooks de renderização

```php
// Antes de renderizar qualquer elemento no frontend
add_action( 'elementor/frontend/before_render', function( $element ) {
    // $element = instância do elemento
});

// Antes de renderizar um widget específico
add_action( 'elementor/widget/before_render_content', function( $widget ) {
    if ( $widget->get_name() === 'heading' ) {
        // Executar código antes do heading renderizar
    }
});

// Modificar output HTML de um widget via filter
add_filter( 'elementor/widget/render_content', function( $content, $widget ) {
    if ( $widget->get_name() === 'text-editor' ) {
        $content = '<div class="wrapper-customizado">' . $content . '</div>';
    }
    return $content;
}, 10, 2 );
```

### Hooks de formulário (Elementor Pro)

```php
// Após envio de formulário
add_action( 'elementor_pro/forms/new_record', function( $record, $handler ) {
    $fields = $record->get_formatted_data();
    $nome   = $fields['nome']['value'] ?? '';
    $email  = $fields['email']['value'] ?? '';

    // Fazer algo com os dados (enviar para CRM, salvar no DB etc.)
}, 10, 2 );

// Validação customizada de campo
add_filter( 'elementor_pro/forms/record/ajax/return_data', function( $return_data, $record ) {
    // Modificar dados de retorno após envio
    return $return_data;
}, 10, 2 );
```

### Injetar controls em widgets existentes

```php
// Adicionar control em um widget nativo via hook
add_action( 'elementor/element/heading/section_title/after_section_end', function( $element ) {
    $element->start_controls_section( 'section_extra', [
        'label' => 'Configurações Extra',
        'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
    ]);

    $element->add_control( 'classe_extra', [
        'label' => 'Classe CSS Extra',
        'type'  => \Elementor\Controls_Manager::TEXT,
    ]);

    $element->end_controls_section();
});

// Sintaxe do hook para injetar em widgets:
// elementor/element/{widget_name}/{section_id}/before_section_start
// elementor/element/{widget_name}/{section_id}/after_section_end
```

### JS Hooks

```javascript
// Hook JS rodando no editor (elementor-preview.js ou via editor scripts)

// Após o editor inicializar
elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {
    // $scope = jQuery wrapper do elemento no preview
    var widgetType = $scope.data( 'widget_type' );
    if ( 'meu_widget.default' === widgetType ) {
        // Inicializar JavaScript do widget no preview
    }
});

// Hook quando qualquer elemento é renderizado no frontend
elementorFrontend.hooks.addAction( 'frontend/element_ready/global', function( $scope, $ ) {
    // Executar para qualquer elemento
});
```

---

## 5. Scripts & Styles

### Static vs. Dynamic Loading

Assim como o WordPress, o Elementor tem hooks especiais para registrar scripts e styles customizados. É muito importante usar o hook correto para melhorar a performance do site. Usar as recomendações e boas práticas do Elementor ajuda a enfileirar arquivos dinamicamente apenas quando utilizados, reduzindo impacto na performance.

### Contextos de enqueue

| Contexto | Quando carrega | Hook correto |
|----------|---------------|-------------|
| **Frontend** | Páginas com Elementor para visitantes | `elementor/frontend/after_enqueue_styles` |
| **Editor** | Painel do editor (lado esquerdo) | `elementor/editor/after_enqueue_scripts` |
| **Preview** | Área de preview no editor | `elementor/preview/enqueue_styles` |
| **Widget** | Apenas quando widget está na página | Dentro do widget — `get_script_depends()` / `get_style_depends()` |

### Enqueue de Frontend Scripts e Styles

```php
// Frontend — carrega em todas as páginas com Elementor
function enqueue_frontend_scripts() {
    wp_register_script(
        'meu-script-frontend',
        plugins_url( 'assets/js/frontend.js', __FILE__ ),
        [ 'jquery' ],
        '1.0.0',
        true // no footer
    );
    wp_enqueue_script( 'meu-script-frontend' );
}
add_action( 'elementor/frontend/after_enqueue_scripts', 'enqueue_frontend_scripts' );

// Frontend — styles
function enqueue_frontend_styles() {
    wp_enqueue_style(
        'meu-estilo-frontend',
        plugins_url( 'assets/css/frontend.css', __FILE__ ),
        [],
        '1.0.0'
    );
}
add_action( 'elementor/frontend/after_enqueue_styles', 'enqueue_frontend_styles' );
```

### Widget Scripts e Styles (carregamento dinâmico — recomendado)

```php
// Dentro da classe do widget — carrega APENAS quando widget está na página
class Meu_Widget extends \Elementor\Widget_Base {

    // Scripts que o widget depende
    public function get_script_depends(): array {
        return [ 'meu-widget-script' ];
    }

    // Styles que o widget depende
    public function get_style_depends(): array {
        return [ 'meu-widget-style' ];
    }
}

// Registrar os assets (sem enqueue — Elementor decide quando carregar)
function registrar_assets_widget() {
    wp_register_script(
        'meu-widget-script',
        plugins_url( 'assets/js/widget.js', __FILE__ ),
        [ 'jquery' ],
        '1.0.0',
        true
    );

    wp_register_style(
        'meu-widget-style',
        plugins_url( 'assets/css/widget.css', __FILE__ ),
        [],
        '1.0.0'
    );
}
add_action( 'wp_enqueue_scripts', 'registrar_assets_widget' );
```

> ⚠️ **Preferir sempre `get_script_depends()` e `get_style_depends()` no widget.** Isso garante que os assets só carreguem quando o widget está presente na página, reduzindo requests desnecessários.

### Editor Scripts e Styles

```php
// Scripts apenas no painel do editor
function enqueue_editor_scripts() {
    wp_enqueue_script(
        'meu-editor-script',
        plugins_url( 'assets/js/editor.js', __FILE__ ),
        [ 'elementor-editor' ],
        '1.0.0',
        true
    );
}
add_action( 'elementor/editor/after_enqueue_scripts', 'enqueue_editor_scripts' );
```

---

## 6. Dynamic Tags

### O que são Dynamic Tags

Dynamic Tags são usadas para inserir dados customizados baseados em várias fontes. Addon developers podem criar uma ampla gama de dynamic tags e até usar APIs externas para puxar dados para o Elementor. Dynamic tags interagem com controls estendendo a funcionalidade do control. Elas transformam controls estáticos em componentes inteligentes — com dynamic tags, usuários podem aproveitar dados gerados dinamicamente em seus sites.

> ⚠️ **Requer Elementor Pro ativo.** A funcionalidade de dynamic tags está definida no Core, mas só é executada com Pro.

### Categorias de Dynamic Tags disponíveis

| Categoria | Uso |
|----------|-----|
| `TEXT` | Tags que retornam texto simples |
| `URL` | Tags que retornam URLs |
| `IMAGE` | Tags que retornam array de imagem |
| `MEDIA` | Tags que retornam URLs de mídia |
| `COLOR` | Tags que retornam valores de cor |
| `NUMBER` | Tags que retornam números |

### Estrutura de uma Dynamic Tag simples

```php
<?php
class Minha_Dynamic_Tag extends \Elementor\Core\DynamicTags\Tag {

    public function get_name(): string {
        return 'minha-tag-customizada';
    }

    public function get_title(): string {
        return esc_html__( 'Minha Tag Customizada', 'meu-addon' );
    }

    public function get_group(): string {
        return 'site';  // grupo no qual a tag aparece
    }

    public function get_categories(): array {
        return [ \Elementor\Modules\DynamicTags\Module::TEXT_CATEGORY ];
    }

    protected function register_controls(): void {
        $this->add_control( 'prefixo', [
            'label'   => 'Prefixo',
            'type'    => \Elementor\Controls_Manager::TEXT,
            'default' => '',
        ]);
    }

    public function render(): void {
        $prefixo = $this->get_settings( 'prefixo' );
        // Buscar dado da fonte (banco de dados, API, meta field etc.)
        $valor = get_option( 'meu_dado_customizado', '' );
        echo esc_html( $prefixo . $valor );
    }
}

// Registrar a tag
function registrar_dynamic_tags( $dynamic_tags ) {
    require_once( __DIR__ . '/tags/minha-dynamic-tag.php' );
    $dynamic_tags->register( new \Minha_Dynamic_Tag() );
}
add_action( 'elementor/dynamic_tags/register', 'registrar_dynamic_tags' );
```

---

## 7. Form Actions e Form Fields

### Form Actions — O que são

Form actions são tarefas executadas após um visitante enviar dados. Uma action pode enviar os dados do formulário por e-mail, redirecioná-los para uma página diferente, ou enviar os dados para um serviço externo de marketing — as possibilidades são infinitas.

### Actions nativas disponíveis

```
Collect Submissions / Email / Email 2 / Redirect / Webhook /
MailChimp / Drip / ActiveCampaign / GetResponse / ConvertKit /
MailerLite / Slack / Discord / Popup
```

### Estrutura de uma Form Action customizada

```php
<?php
class Minha_Form_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

    public function get_name(): string {
        return 'minha-action';
    }

    public function get_label(): string {
        return esc_html__( 'Minha Integração', 'meu-addon' );
    }

    public function register_settings_section( $widget ): void {
        $widget->start_controls_section( 'section_minha_action', [
            'label'     => $this->get_label(),
            'condition' => [ 'submit_actions' => $this->get_name() ],
        ]);

        $widget->add_control( 'api_key', [
            'label' => 'API Key',
            'type'  => \Elementor\Controls_Manager::TEXT,
        ]);

        $widget->end_controls_section();
    }

    public function run( $record, $ajax_handler ): void {
        $settings = $record->get_form_settings();
        $fields   = $record->get_formatted_data();

        $api_key = $settings['api_key'] ?? '';
        $email   = $fields['email']['value'] ?? '';

        // Executar a integração com a API externa
        // ex: enviar lead para CRM, salvar no banco, notificar webhook
    }

    public function on_export( $component ): void {}
}

// Registrar a action
add_action( 'elementor/forms/register_action', function( $form_actions ) {
    require_once( __DIR__ . '/form-actions/minha-form-action.php' );
    $form_actions->register_action( new \Minha_Form_Action() );
});
```

### Acessar dados do formulário no run()

```php
public function run( $record, $ajax_handler ): void {

    // Todos os campos formatados
    $fields = $record->get_formatted_data();

    // Campo específico
    $nome  = $fields['nome']['value']  ?? '';
    $email = $fields['email']['value'] ?? '';
    $tel   = $fields['telefone']['value'] ?? '';

    // Settings do widget do formulário
    $settings = $record->get_form_settings();
    $api_key  = $settings['api_key'] ?? '';

    // Retornar erro (interrompe execução das demais actions)
    if ( empty( $email ) ) {
        $ajax_handler->add_error( 'email', 'E-mail obrigatório.' );
        return;
    }
}
```

---

## 8. Theme Builder — Locations e Conditions

### Theme Locations — visão geral

O Elementor Pro 2.0 introduziu o theme builder, transformando o Elementor de page-builder para site-builder. Todo desenvolvedor de tema pode tornar seu tema compatível com o Elementor suportando a funcionalidade de theme locations. Eles só precisam adicionar algumas linhas de código envolvendo alguns elementos. Isso ajudará o Elementor a substituir elementos do tema por designs Elementor.

### Locations disponíveis

| Location | Substitui | Arquivo PHP do tema |
|----------|----------|---------------------|
| `header` | Header do tema | `header.php` |
| `footer` | Footer do tema | `footer.php` |
| `single` | Post/Page individual | `singular.php`, `single.php`, `page.php` |
| `archive` | Páginas de arquivo | `archive.php`, `taxonomy.php`, `author.php` |

### Tornar um tema Elementor Compatible

```php
// Em functions.php do tema

function registrar_elementor_locations( $elementor_theme_manager ) {
    $elementor_theme_manager->register_location( 'header' );
    $elementor_theme_manager->register_location( 'footer' );
    $elementor_theme_manager->register_location( 'single' );
    $elementor_theme_manager->register_location( 'archive' );
}
add_action( 'elementor/theme/register_locations', 'registrar_elementor_locations' );
```

```php
// Em header.php do tema — exibir location ou fallback para header nativo
<?php
if ( ! function_exists( 'elementor_theme_do_location' )
     || ! elementor_theme_do_location( 'header' ) ) {
    // Header padrão do tema
    get_template_part( 'template-parts/header' );
}
?>

// Em footer.php do tema
<?php
if ( ! function_exists( 'elementor_theme_do_location' )
     || ! elementor_theme_do_location( 'footer' ) ) {
    get_template_part( 'template-parts/footer' );
}
?>
```

### Theme Conditions — criando condições customizadas

O Elementor Pro 2.0 introduziu um mecanismo de exibição de templates baseado em condições. Isso permite que usuários especifiquem sob quais condições um template será exibido. O Elementor Pro fornece ferramentas para desenvolvedores externos criarem e registrarem condições de tema customizadas.

```php
<?php
class Minha_Condicao extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

    public function get_name(): string {
        return 'minha-condicao';
    }

    public function get_label(): string {
        return esc_html__( 'Minha Condição', 'meu-addon' );
    }

    public function check( $args ): bool {
        // Retornar true quando o template DEVE ser exibido
        return is_singular( 'meu-post-type' );
    }
}

// Registrar
add_action( 'elementor/theme/register_conditions', function( $conditions_manager ) {
    require_once( __DIR__ . '/conditions/minha-condicao.php' );
    $conditions_manager->register_condition_instance( new \Minha_Condicao() );
});
```

### SOP — Configuração do Theme Builder no projeto

```
Passo 1 — Templates globais obrigatórios
  └── Elementor > Templates > Theme Builder
  └── Criar: Header Global (condition: Entire Site)
  └── Criar: Footer Global (condition: Entire Site)

Passo 2 — Templates de conteúdo
  └── Criar: Single Post (condition: Posts > All Posts)
  └── Criar: Archive (condition: Archives > All Archives)
  └── Criar: 404 Page (condition: Special Pages > 404)

Passo 3 — Landing Pages (sem header/footer)
  └── Criar como Page com Canvas template (Elementor Full Width)
  └── Condição: Page > URL específica da LP

Passo 4 — Templates de campanha
  └── Duplicar template de LP base
  └── Aplicar condição para URL específica da campanha
  └── No-index via Yoast/RankMath se for exclusiva para anúncio
```

---

## 9. Data Structure

### Como o Elementor salva dados

O Elementor usa JSON para estruturar dados — fácil para humanos lerem e escreverem, e fácil para máquinas analisarem e gerarem. A estrutura de dados JSON do Elementor é usada para armazenar a configuração e o conteúdo de uma página. Quando o usuário clica em salvar no editor, o Elementor armazena os dados da página em formato JSON como metadado de post do WordPress na tabela wp_postmeta.

### Hierarquia de elementos

```
Page (wp_postmeta: _elementor_data)
└── Section / Container
    └── Column (em Sections clássicas)
        └── Widget
            ├── id
            ├── elType: "widget"
            ├── widgetType: "heading"
            ├── settings: { title, align, ... }
            └── elements: []
```

### Estrutura JSON de um elemento

```json
{
  "id": "abc12345",
  "elType": "widget",
  "widgetType": "text-editor",
  "settings": {
    "editor": "<p>Conteúdo do texto</p>",
    "align": "left",
    "_element_id": "meu-id-css",
    "_css_classes": "classe-customizada"
  },
  "elements": []
}
```

### Acessar dados Elementor programaticamente

```php
// Obter dados Elementor de um post específico
$post_id   = get_the_ID();
$elementor = \Elementor\Plugin::$instance;
$document  = $elementor->documents->get( $post_id );

if ( $document ) {
    $data = $document->get_elements_data();
    // $data = array com estrutura completa JSON
}

// Checar se página usa Elementor
if ( \Elementor\Plugin::$instance->db->is_built_with_elementor( $post_id ) ) {
    // Página foi construída com Elementor
}
```

### Global Styles — CSS Variables

```php
// Elementor armazena Global Colors e Global Fonts como CSS variables
// Acessíveis no frontend via:
// var(--e-global-color-primary)
// var(--e-global-color-secondary)
// var(--e-global-typography-primary-font-family)

// No seu CSS customizado, referenciar globals:
.meu-elemento {
    color: var(--e-global-color-primary);
    font-family: var(--e-global-typography-primary-font-family);
}
```

---

## 10. Performance e Otimização

### Widget DOM Optimization

```php
// Remover o wrapper div interno do widget (elementor-widget-container)
// Resulta em HTML mais limpo e menos nesting desnecessário
class Meu_Widget extends \Elementor\Widget_Base {

    protected function is_dynamic_content(): bool {
        return false; // true se o widget usa Dynamic Tags
    }

    // Ativar remoção do inner wrapper
    public function get_html_wrapper_tag(): string {
        return 'article'; // substituir div padrão por tag semântica
    }
}
```

### Widget Output Caching

```php
// Cache de renderização server-side — ideal para widgets pesados
// que consultam banco de dados ou APIs externas
class Meu_Widget_Pesado extends \Elementor\Widget_Base {

    protected function is_dynamic_content(): bool {
        return false; // obrigatório false para habilitar cache
    }

    // O Elementor armazena o HTML renderizado em cache
    // e o reutiliza sem re-executar render() até invalidação
    protected function render(): void {
        // Query ao banco ou API — será cacheado
        $posts = get_posts([ 'numberposts' => 5 ]);
        foreach ( $posts as $post ) {
            echo '<p>' . esc_html( $post->post_title ) . '</p>';
        }
    }
}
```

> ⚠️ **Nunca ativar Output Caching em widgets com conteúdo dinâmico por usuário** (carrinho, estado de login etc.). Marcar `is_dynamic_content(): bool { return true; }` nesses casos.

### Regras de performance para addons

| Prática | Impacto | Como implementar |
|--------|--------|-----------------|
| Usar `get_script_depends()` | Alto | Declara scripts no widget, não no `wp_enqueue_scripts` global |
| Usar `get_style_depends()` | Alto | Mesmo que scripts — carregamento condicional |
| Não registrar CSS/JS inline | Médio | Usar arquivos externos registrados |
| Evitar queries em `render()` sem cache | Alto | Usar transients ou Output Caching |
| Minificar JS/CSS do addon | Médio | Usar `.min.js` em produção, `SCRIPT_DEBUG` para dev |
| CSS Selectors em vez de JS para estilo | Médio | Usar `selectors` no control ao invés de JS style |

### Checklist de performance de Widget

- [ ] `get_script_depends()` declarado com scripts específicos do widget
- [ ] `get_style_depends()` declarado com styles específicos do widget
- [ ] Nenhum `wp_enqueue_*` global desnecessário no addon
- [ ] `is_dynamic_content()` retornando `false` quando aplicável
- [ ] Output Caching ativado em widgets com queries pesadas
- [ ] `content_template()` implementado para preview sem chamadas PHP
- [ ] CSS via `selectors` no control — JS mínimo

---

## 11. Checklists Rápidos

### ✅ Checklist — Novo Addon Elementor

- [ ] Header comments corretos com `Requires Plugins: elementor`
- [ ] Verificação de dependência via `did_action( 'elementor/loaded' )`
- [ ] Estrutura de pastas: `widgets/`, `controls/`, `assets/js/`, `assets/css/`
- [ ] Widgets registrados via `elementor/widgets/register` (não `init`)
- [ ] Nenhuma query no escopo global — apenas dentro dos componentes
- [ ] Text domain correto em todas as strings traduzíveis (`esc_html__()`)
- [ ] Testado com Elementor Core e com Elementor Pro
- [ ] ABSPATH check no início de cada arquivo PHP

### ✅ Checklist — Novo Widget

- [ ] `get_name()` único, lowercase, underscored (ex: `meu_widget_card`)
- [ ] `get_title()` usando `esc_html__()`
- [ ] `get_categories()` com categoria própria do addon
- [ ] `register_controls()` com separação clara Content / Style
- [ ] CSS Selectors usando `{{WRAPPER}}` para escopo correto
- [ ] `render()` com `$this->get_settings_for_display()`
- [ ] `content_template()` espelhando o `render()` em JavaScript
- [ ] Assets declarados em `get_script_depends()` e `get_style_depends()`
- [ ] Output sanitizado com `esc_html()`, `esc_url()`, `wp_kses_post()`
- [ ] Testado: preview em tempo real funciona no editor

### ✅ Checklist — Integração de Formulário (Form Action)

- [ ] Extends `\ElementorPro\Modules\Forms\Classes\Action_Base`
- [ ] `get_name()` único para a action
- [ ] `register_settings_section()` com condition correta
- [ ] `run()` com validação de campos obrigatórios antes de executar
- [ ] Erros retornados via `$ajax_handler->add_error()`
- [ ] API keys e dados sensíveis não expostos no frontend JS
- [ ] `on_export()` implementado (limpar dados sensíveis ao exportar)
- [ ] Testado: envio do formulário dispara a action corretamente

### ✅ Checklist — Theme Builder Setup

- [ ] Header Global criado com condition "Entire Site"
- [ ] Footer Global criado com condition "Entire Site"
- [ ] Template Single Post criado para posts do blog
- [ ] Template Archive criado para listagens
- [ ] Template 404 criado
- [ ] Landing pages com template Canvas (sem header/footer)
- [ ] Tema com `elementor_theme_do_location()` em header.php e footer.php
- [ ] Fallback para header/footer nativo caso Elementor Pro não esteja ativo

### ✅ Checklist — Diagnóstico de problema em Addon

- [ ] Conflito com outro plugin? Desativar todos e reativar um a um
- [ ] Versão do Elementor compatível? Checar `Elementor tested up to` no header
- [ ] Erro de PHP? Ativar `WP_DEBUG` e verificar log
- [ ] Widget não aparece no painel? Verificar hook `elementor/widgets/register`
- [ ] CSS não aplica? Verificar se `{{WRAPPER}}` está correto no selector
- [ ] Preview não atualiza? Verificar `content_template()` implementado
- [ ] Script não carrega? Verificar `get_script_depends()` e se handle está registrado
- [ ] Conflito de namespace? Verificar `if ( ! class_exists( 'MinhaClasse' ) )` antes

---

*Playbook Antigravity — Elementor Developer | DekMidia*  
*Versão 1.0 — Março/2026 | Fonte: developers.elementor.com | Inclui: Widgets + Controls + Hooks + Theme Builder + Performance | Revisar a cada 60 dias*
