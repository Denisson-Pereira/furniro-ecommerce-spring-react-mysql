![Web 1](./assets/tumb.jpg) 

<p align="center">
  <a href="https://github.com/Denisson-Pereira/furniro-ecommerce-spring-react-mysql"><img src="https://img.shields.io/github/languages/top/Denisson-Pereira/furniro-ecommerce-spring-react-mysql?color=blue" alt="Primary Language"></a>
  <a href="https://github.com/Denisson-Pereira/furniro-ecommerce-spring-react-mysql/issues"><img src="https://img.shields.io/github/issues-raw/Denisson-Pereira/furniro-ecommerce-spring-react-mysql" alt="Open Issues"></a>
  <a href="https://github.com/Denisson-Pereira/furniro-ecommerce-spring-react-mysql/graphs/contributors"><img src="https://img.shields.io/github/contributors/Denisson-Pereira/furniro-ecommerce-spring-react-mysql" alt="Contributors"></a>
  <a href="https://github.com/Denisson-Pereira/furniro-ecommerce-spring-react-mysql/commits/main"><img src="https://img.shields.io/github/last-commit/Denisson-Pereira/furniro-ecommerce-spring-react-mysql" alt="Last Commit"></a>
  <a href="https://github.com/Denisson-Pereira/furniro-ecommerce-spring-react-mysql/stargazers"><img src="https://img.shields.io/github/stars/Denisson-Pereira/furniro-ecommerce-spring-react-mysql" alt="Stars"></a>
</p>

# 📝 Sumário

1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Stack Tecnológica e Descrições](#-stack-tecnológica-e-descrições)
   - [Backend](#-backend)
        - [Princípios SOLID](#-princípios-solid)
        - [Design patterns](#-design-patterns)
        - [Estrutura do Banco de Dados](#-estrutura-do-banco-de-dados)
   - [Frontend](#-frontend)
   - [Design](#-design)
3. [Pré-requisitos](#-pré-requisitos)
4. [Como Executar o Projeto](#-como-executar-o-projeto)
   - [Clonar Repositório Git](#-clonar-repositório-git)
   - [Acessar Backend](#-acessar-backend)
   - [Documentação](#-documentação)
5. [Visuals and Screenshots](#-visuals-and-screenshots)
   - [Software em Ação](#-software-em-ação)
6. [Edição](#-edição)   
7. [Aguarde! Ainda Não Terminou!](#-aguarde-ainda-não-terminou)
8. [Licença](#-licença)
9. [Design Credits](#-design-credits)
10. [Referências Bibliográficas](#-referências-bibliográficas)

# 📑 Sobre o projeto 

O **Furniro** é um projeto *fullstack* de *e-commerce* baseado em um design do **Figma** desenvolvido com **Clean Architecture** em todas as suas camadas, tanto no *backend* quanto no *frontend*, seguindo os princípios do **SOLID** e do **Clean Code**. O servidor, construído em **Java** com **Spring Boot**, utiliza **JDBC** e **MySQL** para a persistência de dados, garantindo eficiência e escalabilidade. Além disso, conta com um robusto sistema de autenticação, implementado com **Spring Security**, **JWT** e **BCrypt**, proporcionando mais segurança. Para maior flexibilidade, o projeto também incorpora um mecanismo avançado de **upload** de arquivos, tornando a experiência ainda mais completa e segura.

O *frontend* foi desenvolvido com **React**, **TypeScript** e o padrão **MVVM**, garantindo uma interface moderna e performática. Para assegurar a qualidade do código, foram utilizadas ferramentas como **Jest** e **Vitest** para testes automatizados, além do **Storybook** para a documentação dos componentes. Ademais, o projeto conta com **Docker** e internacionalização via **i18n**, suportando **sete** idiomas.


# 📚 Stack Tecnológica e Descrições

## • Backend

[![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.java.com/)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)
[![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)](https://spring.io/)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white)
![JDBC](https://img.shields.io/badge/JDBC-007396?style=for-the-badge&logo=java&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)


O *backend* deste projeto foi desenvolvido seguindo os princípios da **Clean Architecture**, garantindo uma estrutura de código organizada e escalável. A documentação da **API** foi feita com **Swagger**, facilitando a integração e o entendimento das rotas. As entidades ``Product`` e ``Category`` possuem os métodos **POST**, **PUT**, **GET** e **DELETE**, permitindo a criação, atualização, consulta e remoção de registros. O sistema conta também com um robusto **upload** de arquivos para contatos e autenticação segura utilizando **JWT** e **BCrypt**. Com **Spring Security**, foi possível proteger rotas privadas, enquanto exceções personalizadas oferecem um controle preciso sobre erros, proporcionando uma experiência mais consistente para os usuários.

# 🚨 Atenção!

>Uso de Variáveis de Ambiente:

```
${USERNAME_BANCO}
${SENHA_BANCO}
```


### 💾 Estrutura do Banco de Dados

O banco de dados `foodhub` contém três tabelas principais: `category`, `product` e `user`.

### Tabela: category

| Campo   | Tipo         | Descrição                               |
|---------|--------------|-----------------------------------------|
| id      | int       | Identificador único da categoria        |
| name    | varchar(255) | Nome da categoria                       |
| image   | varchar(255) | URL da imagem da categoria              |


### Tabela: product

| Campo          | Tipo         | Descrição                          |
|----------------|--------------|------------------------------------|
| id             | int       | Identificador único do produto      |
| name           | varchar(255) | Nome do produto                    |
| evaluation     | varchar(255) | Avaliação do produto               |
| description    | varchar(255) | Descrição do produto               |
| price          | varchar(255) | Preço do produto                   |
| category       | varchar(255) | Categoria do produto               |
| establishment   | varchar(255) | Estabelecimento onde o produto está disponível |
| image          | varchar(255) | URL da imagem do produto           |


### Tabela: user

| Campo   | Tipo         | Descrição                               |
|---------|--------------|-----------------------------------------|
| id      | int       | Identificador único do usuário          |
| name    | varchar(255) | Nome do usuário                         |
| login   | varchar(255) | Login do usuário                        |
| password| varchar(255) | Senha do usuário                       |


## • Frontend

![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![Vitest](https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-FF5F5F.svg?style=for-the-badge&logo=international&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)


O aplicativo foi desenvolvido utilizando **React Native**, uma abordagem que permite a construção de plataformas para **iOS** e **Android** de forma eficiente e integrada. Para alinhar com a **Clean Architecture** do *backend*, adotou-se o padrão **MVVM**, que promove a separação entre a lógica de negócios e os componentes da interface do usuário. Essa escolha reflete a intenção de minimizar o uso de *frameworks* e bibliotecas, criando uma plataforma robusta e escalável para o futuro.

Além disso, o aplicativo faz uso do **Context API** para gerenciar diversos aspectos do sistema, como o controle de usuários, informações de produtos e estabelecimentos, autenticação de usuários com rotas privadas, cadastro e login de usuários, e o gerenciamento do carrinho de compras, que inclui a funcionalidade de cupons de desconto. Essa estrutura foi pensada para garantir uma experiência de uso fluida e um gerenciamento eficiente dos dados.

## • Design

![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-%23051D34?style=for-the-badge&logo=adobe%20photoshop&logoColor=%233CA3F7)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
[![Canvas](https://img.shields.io/badge/Canvas-%2300599C.svg?style=for-the-badge&logo=canvas&logoColor=white)](https://canvas.instructure.com/)

O **Adobe Photoshop** foi empregado para a edição e manipulação de imagens, garantindo qualidade e profissionalismo. Além disso, **Figma** foi utilizado para criar protótipos e layouts, facilitando a visualização e a colaboração no design da interface. Para capturas de tela e materiais educacionais, recorreu-se ao **Canvas**, que oferece uma plataforma intuitiva para a criação e compartilhamento de conteúdos visuais.

# ⚙ Pré-requisitos

**Certifique-se de ter o o Java 17**

Antes de mais nada, é necessário verificar se o Java 17 está instalado em sua máquina. Você pode baixá-lo e instalá-lo a partir do site oficial da Oracle.

![Oracle JDK](https://img.shields.io/badge/Oracle%20JDK-FF6A00?style=for-the-badge&logo=oracle&logoColor=white)

# 🚀 Como executar o projeto

## 👯 Clonar repositório git

```
git clone https://github.com/Denisson-Pereira/foodhub-app
```

## 🏧 Acessar Backend

Após clonar o repositório, para acessar o backend, basta digitar o seguinte comando no terminal:

```
cd backend
```

Você pode rodar a aplicação com o seguinte comando:

```
mvn spring-boot:run
```

Esse comando irá compilar e rodar a aplicação diretamente no terminal.

![Web 1](./github/projetofood.gif) 

## Rodar o Mobile

Após clonar o repositório, para acessar o mobile, basta digitar o seguinte comando no terminal:

```
cd mobile
```

Para ver o projeto, certifique-se de que o backend está rodando e digite:

```
npx expo start
```

Esse comando é usado para iniciar um projeto desenvolvido com Expo.

![Web 2](./github/expo.gif) 

Lembre-se de que os dados do banco estão localizados, a partir da raiz do projeto, em `database/Dump20240831.sql`.

## 📱 Documentação

Para acessar a documentação da API, basta visitar a URL:

```
http://localhost:8080/swagger-ui/index.html#/
```

![Doc 1](./github/swagger.png) 

# 📸 Visuals and Screenshots

Dê uma espiada no nosso projeto em funcionamento e esclareça todas as suas dúvidas sobre como executá-lo!

<div style="display: flex; gap: 10px;">
    <img src="./github/img0.jpeg" alt="Mob 1" style="width: 30%;">
    <img src="./github/img1.jpeg" alt="Mob 2" style="width: 30%;">
    <img src="./github/img2.jpeg" alt="Mob 3" style="width: 30%;">
    <img src="./github/img3.jpeg" alt="Mob 4" style="width: 30%;">
    <img src="./github/img4.jpeg" alt="Mob 5" style="width: 30%;">
    <img src="./github/img5.jpeg" alt="Mob 6" style="width: 30%;">
</div>


## 💻 Software em Ação

![Mob 1](./github/action.gif) 


# 📺 Edição

No desenvolvimento deste projeto, foram utilizados os seguintes editores:

![IntelliJ IDEA](https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white)
![MySQL Workbench](https://img.shields.io/badge/MySQL_Workbench-005C6C.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

# 🚨 Aguarde! Ainda não terminou!

>Este projeto está atualmente em desenvolvimento, e está sujeito a futuras atualizações e melhorias conforme evolui. Estamos trabalhando para torná-lo ainda mais robusto e funcional ao longo do tempo. Agradecemos sua paciência e interesse nesta fase inicial.

>Por fim, gostaríamos de ressaltar que este projeto é aberto a contribuições de qualquer pessoa interessada em colaborar. Se você tem ideias, sugestões ou melhorias para oferecer, sinta-se à vontade para participar do desenvolvimento do projeto. Juntos, podemos criar algo incrível e beneficiar a comunidade de forma colaborativa.

# 🎨 Design Credits

[FoodHub](https://www.figma.com/community/file/1016293188579696778/food-app-foodhub-community) Figma Community Design

# 📜 Licença

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Denisson-Pereira/foodhub-app/blob/main/LICENSE) 

# 📝 Referências Bibliográficas  

MARTIN, S. R. **Código Limpo: Habilidades Práticas do Agile Software**. Rio de Janeiro: Alta Books, 2011.
MARTIN, S. R. **Arquitetura Limpa: O Gui do Artesão para Estrutura e Design de Software**. Rio de Janeiro: Alta Books, 2018.