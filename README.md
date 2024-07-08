# shortie

Shortie is a web application that allows you to shorten URLs and generate QR codes quickly and easily. 

## Features

- **Shorten URLs**: Transform long URLs into short, easy-to-share links.
- **Generate QR Codes**: Create QR codes for the generated short URLs, making it easy to access from mobile devices.

## Technologies Used

### Stack

- **Database**: MongoDB
- **Frontend & Backend**: Next.js
- **Programming Language**: TypeScript

### Libraries

- **Mongoose**: For modeling data in MongoDB.
- **Tailwind CSS**: CSS framework for agile and modern design.
- **Yup**: For schema validation.
- **shadcn**: UI components library.

## Installation

Follow these steps to set up the project on your local machine:

1. Clone this repository:
    ```bash
    git clone https://github.com/dot-all/shortie.git
    ```

2. Navigate to the project directory:
    ```bash
    cd shortie
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Set up the environment variables. Create a `.env` file in the project root and add the following variables:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    NEXT_PUBLIC_BASE_URL=your_base_url_string
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

1. Access the application in your browser at `http://localhost:3000`.
2. Enter the URL you want to shorten and click the "shortie" button.
3. Get the short link and the generated QR code for easy sharing.

## Contributing

Contributions are welcome! If you want to improve Shortie, follow these steps:
 
1. Fork this repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -am 'feat: Add new feature'`).
4. Push the changes to your branch (`git push origin feature/new-feature`).
5. Create a Pull Request.

*Shortie - Simplify your links.*
