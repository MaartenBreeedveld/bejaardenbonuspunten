import React from 'react';
import { PersonStats, createDefaultStats } from "../StatsApi";
import { useHistory } from "react-router";
import { useState, createContext } from "react";
import { AuthContext } from '../contexts/MainContextProvider'

export default class Auth {

  private static currentUser: PersonStats;

  static init() {
    const storage = localStorage.getItem("currentUser");
    if (!storage) return;
    this.currentUser = JSON.parse(storage);
  }

  static async signIn(user: string, password: string): Promise<boolean> {
    
    const person = createDefaultStats().find(x => x.name === user && x.password === password);
    if (!person) {
      alert('wachtwoord is onjuist');
      return false;
    }

    this.currentUser = person;
    localStorage.setItem('currentUser', JSON.stringify(person));
    return true;

  }

  static signOut() {
    localStorage.removeItem("currentUser");
  }

  static getCurrentUser() {
    return this.currentUser;
  }
}

Auth.init();

