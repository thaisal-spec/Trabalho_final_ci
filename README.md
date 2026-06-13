# Trabalho_final_ci
Trabalho_final_ci
# Pipeline de Integração Contínua com GitHub Actions

## Objetivo

Implementar uma pipeline de Integração Contínua (CI) utilizando GitHub Actions para automatizar a execução dos testes do projeto.

## Tecnologias Utilizadas

- Node.js
- Mocha
- GitHub Actions

## Eventos de Execução


### Push
A execução manual é realizada no workflow_dispatch
A execução automatica é realizada schedule:   - cron: '0 12 * * *' todo dia 12 UTC.
A pipeline é executada automaticamente sempre que ocorre um push para a branch principal.
O relatório de testes foi realizado na linha npx mocha test/*.js --reporter json (O arquivo gerado é armazenado como artefato do workflow para consulta posterior.)

