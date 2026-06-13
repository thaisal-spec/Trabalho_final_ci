# Trabalho_final_ci
Trabalho_final_ci
# Pipeline de Integração Contínua com GitHub Actions

## Objetivo


Este projeto tem como objetivo implementar uma pipeline de Integração Contínua (CI) utilizando GitHub Actions para automatizar a execução dos testes desenvolvidos com o framework Mocha.

A pipeline foi configurada para executar automaticamente em diferentes situações, garantindo a validação contínua do código e a identificação rápida de possíveis falhas.

## Estrutura do Projeto

```text
.
├── .github
│   └── workflows
│       └── ci-exec.yaml
├── src
│   └── ServicoDePagamento.js
├── test
│   └── ServicoDePagamento.test.js
├── package.json
└── README.md
```

---

## Funcionalidades da Pipeline

### 1. Execução por Push

A pipeline é executada automaticamente sempre que um novo código é enviado para a branch principal do projeto.

```yaml
push:
  branches:
    - main
```

### 2. Execução Manual

Permite que a pipeline seja executada diretamente pela interface do GitHub através da aba Actions.

```yaml
workflow_dispatch:
```

### 3. Execução Agendada

A pipeline também é executada automaticamente em horários definidos utilizando a sintaxe cron.

```yaml
schedule:
  - cron: '0 12 * * *'
```

Neste exemplo, a execução ocorre diariamente às 12:00 UTC.

---

## Etapas da Pipeline

A pipeline realiza as seguintes atividades:

### Checkout do Código

Obtém a versão mais recente do projeto armazenado no repositório.

```yaml
- uses: actions/checkout@v4
```

### Configuração do Ambiente Node.js

Instala e configura a versão do Node.js necessária para o projeto.

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: 22
```

### Instalação das Dependências

Instala todas as dependências definidas no arquivo package.json.

```yaml
- name: Instalar dependências
  run: npm install
```

### Execução dos Testes

Executa os testes automatizados utilizando o Mocha.

```yaml
- name: Executar testes
  run: npm test
```

### Geração de Relatório

Gera um relatório dos resultados dos testes em formato JSON.

```yaml
- name: Gerar relatório
  run: |
    mkdir -p relatorios
    npm test -- --reporter json > relatorios/resultado-testes.json
```

### Publicação do Relatório

Armazena o relatório gerado como artefato do GitHub Actions.

```yaml
- name: Publicar relatório
  uses: actions/upload-artifact@v4
  with:
    name: relatorio-testes
    path: relatorios/resultado-testes.json
```

---

## Testes Implementados

O projeto possui testes automatizados para a classe `ServicoDePagamento`.

### Cenários testados

- Registro de pagamento com categoria **cara** (valor acima de R$ 100,00).
- Registro de pagamento com categoria **padrão** (valor igual ou inferior a R$ 100,00).

---

## Benefícios da Integração Contínua

A utilização de Integração Contínua proporciona:

- Automatização da validação do código.
- Redução de erros em produção.
- Identificação rápida de falhas.
- Maior confiabilidade no processo de desenvolvimento.
- Histórico de execuções e resultados dos testes.

---

## Como Executar Localmente

Instalar as dependências:

```bash
npm install
```

Executar os testes:

```bash
npm test
```

---

## Conclusão

A solução implementada utiliza GitHub Actions para automatizar a execução dos testes do projeto, atendendo aos requisitos de execução por push, execução manual e execução agendada. Além disso, a pipeline gera relatórios de testes e disponibiliza os resultados através dos artefatos do GitHub Actions, contribuindo para a qualidade e confiabilidade do software.
