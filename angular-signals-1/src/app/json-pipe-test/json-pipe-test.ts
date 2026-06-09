import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { SafeJsonPipe } from '../safe-json-pipe';
@Component({
  selector: 'app-json-pipe-test',
  imports: [JsonPipe, SafeJsonPipe],
  templateUrl: './json-pipe-test.html',
  styleUrl: './json-pipe-test.css'
})
export class JsonPipeTest {
  user = {
    id: 1,
    name: 'Bruno',
    email: 'bruno@test.com',
    active: true,
    address: {
      city: 'La Paz',
      country: 'Bolivia'
    }
  };

  settings = {
    darkMode: true,
    language: 'English',
    password: "123456",
    token:"654321",
    notifications: {
      email: true,
      sms: false
    }
  };

  apiResponse = {
    status:200,
    message: "Success",
    data:this.user,
    userSettings:this.settings
  }
  formData = {
    fullName: 'Bruno Salinas',
    firstName: "Bruno",
    lastName: "Salinas",
    email: 'bruno@test.com',
    password: '123456',
  };
}