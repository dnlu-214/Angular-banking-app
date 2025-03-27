import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-banking-app';
  accountForm: FormGroup;
  transferForm: FormGroup;
  selectedAccountType: string = 'Chequing';
  accounts: any[] = []; // To store the accounts
  transactionHistory: any[] = [];

  constructor(private fb: FormBuilder) {
    this.accountForm = this.fb.group({
      accountName: ['', [Validators.required, Validators.minLength(3)]],
      initialBalance: ['', [Validators.required, Validators.min(0)]],
    });

    this.transferForm = this.fb.group({
      transferAmount: ['', [Validators.required, Validators.min(1)]],
      fromAccount: ['', Validators.required],
      toAccount: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.accountForm.valid) {
      const accountData = this.accountForm.value;
      this.accounts.push({
        name: accountData.accountName,
        balance: accountData.initialBalance,
        type: this.selectedAccountType,
      });
      this.accountForm.reset();
    }
  }

  onTransferSubmit() {
    if (this.transferForm.valid) {
      const transferData = this.transferForm.value;
      const fromAccount = this.accounts.find(account => account.name === transferData.fromAccount);
      const toAccount = this.accounts.find(account => account.name === transferData.toAccount);

      if (fromAccount.balance >= transferData.transferAmount) {
        fromAccount.balance -= transferData.transferAmount;
        toAccount.balance += transferData.transferAmount;

        // Add transaction to history
        this.transactionHistory.push({
          from: transferData.fromAccount,
          to: transferData.toAccount,
          amount: transferData.transferAmount,
          date: new Date(),
        });

        // Reset form
        this.transferForm.reset();
      } else {
        alert('Insufficient funds');
      }
    }
  }
}
