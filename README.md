# MyAngularApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

# Angular Banking App

## Project Overview

This is a banking application built with Angular, featuring account creation, fund transfer, and transaction history viewing functionalities. The project utilizes Angular’s form handling, styling, and basic component structure.

## Features

- **Create Account**: Users can enter an account name, initial balance, and choose an account type (Chequing or Savings) to create a new account.
- **Transfer Funds**: Users can select a source account and a destination account to transfer funds, with balance checks to ensure sufficient funds.
- **View Transaction History**: Users can view a list of all completed transfers.

## Tech Stack

- **Angular**: Frontend framework
- **CSS**: Page styling and UI enhancement
- **Reactive Forms**: For handling forms and validations
- **Router**: For navigation between pages (although not enabled at the moment)
- **Bootstrap**: For responsive design and UI beautification

## Installation and Running

### Clone the Repository

```bash
git clone https://github.com/yourusername/angular-banking-app.git
cd angular-banking-app
```
### Install the Dependencies
```bash
npm install
```
### Run the App
```bash
ng serve
```

Then, open your browser and go to http://localhost:4200/.

## Project Structure

- src/app/app.component.ts: The main component handling account creation and fund transfer functionality.

- src/app/transaction-history.component.ts: Transaction history component that displays all the completed transfers.

- src/app/app.component.html: HTML template for the main page.

- src/app/app.component.css: Page styling.

## Project Status
The project currently includes account creation and fund transfer functionalities, as well as transaction history. Future plans may involve enabling Angular Router for multi-page navigation.



