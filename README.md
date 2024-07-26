# Frontend Ursula - Granto Seguros

Este projeto é uma aplicação front-end construída com ReactJS. A aplicação inclui gerenciamento de estado local, roteamento e integração com microserviços de back-end. Foi desenhada com base em um protótipo do Figma criado pelo nosso designer, Vinícius.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-la no navegador.

A página será recarregada quando você fizer alterações.\
Você também verá erros de lint no console.

### `npm test`

Inicia o executor de testes no modo interativo de observação.\
Veja a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Compila a aplicação para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para a melhor performance.

A compilação é minificada e os nomes dos arquivos incluem os hashes.\
Sua aplicação está pronta para ser implantada!

Veja a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### `npm run eject`

**Nota: esta é uma operação sem volta. Uma vez que você `eject`, não pode mais voltar!**

Se você não estiver satisfeito com a ferramenta de construção e as escolhas de configuração, você pode `eject` a qualquer momento. Este comando removerá a única dependência de compilação do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc.) diretamente para o seu projeto para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas apontarão para os scripts copiados para que você possa ajustá-los. A partir deste ponto, você está por sua conta.

Você nunca precisa usar `eject`. O conjunto de recursos é adequado para pequenas e médias implantações e você não deve se sentir obrigado a usar este recurso. No entanto, entendemos que esta ferramenta não seria útil se você não pudesse personalizá-la quando estivesse pronto para isso.

## Configuração do Front-End

### Instalação

Para configurar o projeto localmente, siga estes passos:

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Instale React e Bootstrap:**

    ```bash
    npm install react react-dom react-router-dom bootstrap
    ```

## Estrutura do Projeto

O front-end foi desenvolvido usando React puro e Bootstrap para estilização. O projeto inclui roteamento para lidar com diferentes visualizações e armazenamento local para gerenciamento de estado.

### Dependências

Aqui está um exemplo do arquivo `package.json` com as dependências necessárias:

```json
{
  "name": "frontend-app",
  "version": "1.0.0",
  "description": "Aplicação front-end construída com ReactJS",
  "main": "index.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.2.0",
    "bootstrap": "^5.1.0"
  },
  "devDependencies": {
    "react-scripts": "4.0.3"
  },
  "author": "Seu Nome",
  "license": "ISC"
}
```

## Executando o Front-End

### Modo de Desenvolvimento

Para executar a aplicação em modo de desenvolvimento, use o seguinte comando:

```bash
npm start
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

### Compilando para Produção

Para compilar a aplicação para produção, use:

```bash
npm run build
```

Isso criará uma compilação otimizada na pasta `build`.

## Implantação

A aplicação front-end está hospedada em uma instância AWS EC2. Abaixo estão os passos para implantar uma aplicação ReactJS em uma instância EC2.

### Implantando na AWS EC2

1. **Inicie uma instância EC2:**
    - Escolha uma Amazon Machine Image (AMI) (por exemplo, Ubuntu).
    - Selecione um tipo de instância (por exemplo, t2.micro para a camada gratuita).
    - Configure as configurações do grupo de segurança para permitir acesso HTTP (porta 80) e SSH (porta 22).

2. **Conecte-se à instância EC2:**
    - Use SSH para conectar-se à sua instância.

    ```bash
    ssh -i "seu-par-de-chaves.pem" ubuntu@seu-dns-publico-ec2
    ```

3. **Instale Node.js e Nginx:**

    ```bash
    sudo apt update
    sudo apt install nodejs npm nginx
    ```

4. **Clone seu repositório e instale as dependências:**

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    npm install
    npm run build
    ```

5. **Configure o Nginx:**
    - Abra o arquivo de configuração padrão do Nginx:

    ```bash
    sudo nano /etc/nginx/sites-available/default
    ```

    - Substitua o conteúdo pelo seguinte:

    ```nginx
    server {
        listen 80;

        server_name seu-dns-publico-ec2;

        location / {
            root /home/ubuntu/seu-repositorio/build;
            try_files $uri /index.html;
        }
    }
    ```

    - Reinicie o Nginx:

    ```bash
    sudo systemctl restart nginx
    ```

Sua aplicação React deve estar acessível a partir do DNS público da sua instância EC2.
