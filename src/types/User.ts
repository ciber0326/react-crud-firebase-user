export interface User {
    id?: string; // Optional because Firestore generates IDs
    name: string;
    email: string;
  }
  