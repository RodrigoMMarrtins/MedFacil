# Medifacil

**Medifacil** é uma plataforma inovadora que conecta pacientes com necessidades específicas a médicos especialistas em sua região, facilitando o agendamento de consultas presenciais ou on-line. A plataforma visa simplificar o processo de busca e agendamento de consultas médicas, promovendo acesso rápido e eficiente aos cuidados de saúde.

## 💡 Visão

Nossa missão é garantir que qualquer pessoa tenha fácil acesso a médicos especializados, independentemente de sua localização, seja para uma consulta presencial ou virtual.

## 🚀 Funcionalidades

- **Conexão com Especialistas**: Encontre médicos especializados perto de você, com base em sua localização e necessidade.
- **Consultas Online**: Agende e realize consultas médicas de forma rápida, de qualquer lugar.
- **Agendamento Fácil**: Agende suas consultas de maneira simples e sem burocracia.
- **Perfil do Médico**: Visualize detalhes sobre médicos, como especialidades, avaliações e horários disponíveis.
- **Sistema de Feedback**: Após as consultas, os pacientes podem deixar avaliações sobre os médicos.

## 🔧 Tecnologias

O **Medifacil** foi desenvolvido utilizando as seguintes tecnologias:

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Banco de Dados**: MongoDB
- **Autenticação**: JWT (JSON Web Token)
- **Containerização**: Docker
- **Outras ferramentas**: APIs de videoconferência (ex. Zoom, Google Meet) para consultas online

## 📅 Como Funciona?

1. **Cadastro de Usuários**: Pacientes e médicos se cadastram na plataforma.
2. **Busca de Médicos**: Pacientes podem buscar médicos com base em especialidade e localização.
3. **Agendamento de Consultas**: O paciente escolhe um médico e agenda uma consulta presencial ou online.
4. **Consulta**: Realização da consulta, com opção de videoconferência para consultas online.
5. **Avaliação**: Após a consulta, o paciente pode deixar uma avaliação sobre o atendimento.

## 🌍 Público-Alvo

- **Pacientes**: Pessoas que precisam de cuidados médicos especializados e procuram uma maneira fácil de agendar consultas.
- **Médicos**: Profissionais de saúde que desejam expandir sua base de pacientes e oferecer consultas online.

## 🎨 Design
Paleta de Cores
**Perfume**
HEX: #CED0F9
RGB: rgb(206,208,249)
BIAS: 82%
### Boston Blue
HEX: #3C79BE
RGB: rgb(60,121,190)
BIAS: 82% WCAG Ratio: AA Large (3:1)

Logo: ![MediFácil-removebg-preview](https://github.com/user-attachments/assets/3bf92658-6b6b-4e56-a131-d05ed7cab4d6)

## 🅃𝗶𝗽𝗼𝗴𝗿𝗮𝗳𝗶𝗮

Para garantir uma interface moderna e legível, o **Medifacil** utiliza as fontes **Poppins** e **Roboto**, que são amplamente usadas em design web pela sua clareza e versatilidade.

### **Poppins**
- **Fonte Primária**: **Poppins** é a fonte principal usada para os textos da interface.
- **Estilo**: A fonte tem um design moderno, geométrico e arredondado, que proporciona uma aparência limpa e amigável.
- **Uso**: Utilizada em títulos, subtítulos e outros elementos de destaque, ajudando a criar uma hierarquia visual clara e chamativa.

### **Roboto**
- **Fonte Secundária**: **Roboto** é usada para os textos corridos e conteúdo de leitura.
- **Estilo**: Roboto tem um estilo mais neutro e legível, projetado para ser altamente legível em diferentes tamanhos e dispositivos.
- **Uso**: Usada principalmente em parágrafos, descrições e botões, oferecendo uma excelente legibilidade em qualquer tamanho de tela.

### Como são usadas no projeto:
- **Poppins**: Principalmente em elementos de destaque como cabeçalhos, títulos de seções e botões importantes.
- **Roboto**: Para textos de corpo, parágrafos, descrições e conteúdos que exigem maior legibilidade em diversas resoluções.

### Exemplos de uso:

- **Título**: `font-family: 'Poppins', sans-serif;`
- **Texto de Corpo**: `font-family: 'Roboto', sans-serif;`

Ambas as fontes são fornecidas pelo Google Fonts, garantindo excelente suporte em todos os navegadores modernos. 
## 🎨 Design das Telas no Figma

As telas do **Medifacil** foram projetadas no **Figma**, visando uma experiência de usuário fluida, intuitiva e moderna. O design foi desenvolvido para ser acessível e responsivo, atendendo às necessidades tanto dos pacientes quanto dos médicos.

### 🔐 Tela de Login
A tela de **Login** foi criada para garantir um acesso rápido e seguro à plataforma. Os principais elementos incluem:
- Campos de **e-mail** e **senha**.
- Botões de ação para **entrar** e **recuperar senha**.
- Opção para **login social** (Google).
- Design minimalista e fácil de usar, com foco em simplicidade e clareza.

### 📝 Tela de Registro
A tela de **Registro** permite que novos usuários (pacientes e médicos) se cadastrem na plataforma. Ela contém:
- Campos obrigatórios como **nome completo**, **e-mail**, **senha** e **confirmação de senha**.
- Opção de selecionar o tipo de usuário (paciente ou médico).
- Botão de **registro** claro e fácil de entender.
- Links para redirecionar para a tela de **login** ou recuperar senha.

### 📅 Tela de Calendário
A **Tela de Calendário** permite ao paciente visualizar a disponibilidade de médicos e escolher a data para a consulta. Ela inclui:
- Um calendário interativo com datas disponíveis.
- Marcação de dias livres e ocupados, facilitando a escolha do melhor horário.
- Design responsivo, com fácil navegação tanto em desktop quanto em dispositivos móveis.

### 📆 Tela de Agendamento
A tela de **Agendamento** é onde o paciente confirma os detalhes da consulta e escolhe o horário com base na disponibilidade do médico. Os componentes incluem:
- Seleção de data e horário do médico.
- Detalhes do médico e da especialidade.
- Opções para **agendar consulta presencial** ou **online**.
- Confirmar o agendamento e enviar uma notificação ao paciente e ao médico.

### 💬 Tela de Suporte
A **Tela de Suporte** oferece aos usuários um canal direto para resolver problemas ou tirar dúvidas. Ela inclui:
- Formulário simples para enviar uma mensagem de **suporte técnico** .
- Campo de texto para descrever o problema ou a dúvida.

### 🔗 Protótipos Interativos
Os protótipos interativos criados no **Figma** permitem testar e simular a navegação entre as telas, oferecendo uma visão clara de como os usuários interagirão com a plataforma.

Você pode visualizar todas as telas e interações no arquivo do Figma:

[**Acesse o Design no Figma**](https://www.figma.com/design/v2ITe8igTHQl3IZ9mro8s8/MediF%C3%A1cil-Pages?node-id=0-1&node-type=canvas&t=Pe8CtxgHOcGY93Y8-0)

### 🖌️ Arquivos Figma
Os arquivos do **Figma** contêm as versões mais recentes dos designs e protótipos, incluindo todas as telas, interações e componentes.

Esses arquivos são essenciais para desenvolvedores e designers que desejam seguir o design e garantir a consistência visual no desenvolvimento da interface.

Essas telas representam o fluxo principal de interação com a plataforma **Medifacil**, oferecendo uma experiência de usuário intuitiva e agradável.

## 🛠️ Como Rodar o Projeto

Para rodar o **Medifacil** localmente, siga os passos abaixo:

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/medifacil.git

### 2. Instalar Dependências

Backend
cd backend
npm install

Frontend
cd frontend
npm install

### 3. Configurar o Banco de Dados
Crie uma conta no MongoDB Atlas ou configure o MongoDB localmente.
No arquivo .env do backend, defina a URL de conexão do MongoDB.

### 4. Rodar a aplicação com Docker
Com o Docker, você pode rodar tanto o frontend quanto o backend facilmente:
docker-compose up --build
Isso vai construir e rodar os containers Docker para o frontend e backend, garantindo que todos os serviços necessários estejam configurados corretamente.

### 5. Acessar a aplicação
O frontend estará disponível em http://localhost:3000.
O backend estará disponível na porta configurada (normalmente http://localhost:5000).

📝 Estrutura do Projeto
frontend/: Contém a aplicação Next.js com TypeScript, onde é gerida a interface do usuário e o frontend da aplicação.
backend/: Contém a API em Node.js, onde são feitas as operações de autenticação, cadastro de usuários e consultas com o MongoDB.
docker-compose.yml: Arquivo para configurar e orquestrar os containers Docker do projeto.
🎨 Contribuindo
Contribuições são bem-vindas! Se você deseja melhorar o Medifacil, siga os seguintes passos:

Faça um fork deste repositório.
Crie uma branch para a sua feature (git checkout -b minha-feature).
Commit suas mudanças (git commit -am 'Adiciona nova funcionalidade').
Envie para o branch original (git push origin minha-feature).
Crie um Pull Request.

📜 Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

📧 Contato
Email: contato@medifacil.com
Website: www.medifacil.com
