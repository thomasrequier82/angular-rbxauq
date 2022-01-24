export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'ARCHOS X67 5G',
    price: 799,
    description: 'Profitez de la 5G pour télécharger tous vos  contenus en un clin d’œil. Son processeur ultra puissant couplé à 8GB de RAM vous garantissent une fluidité et une rapidité d’exécution parfaite'
  },
  {
    id: 2,
    name: 'Archos 50 Saphir Anti-Choc',
    price: 699,
    description: 'Vous cherchez un smartphone résistant ? Découvrez sans plus attendre l ARCHOS 50 Saphir, son design tout terrain et ses solides spécifications'
  },
  {
    id: 3,
    name: 'ARCHOS SAPHIR 24F',
    price: 299,
    description: 'Il est évident qu avec l ARCHOS Saphir 24F vous pouvez passer des appels téléphoniques. Saviez-vous qu il vous ait aussi possible de prendre des photos, écouter la radio ou de vous en servir comme lampe torche ! En plus, grâce à sa batterie de grande capacité, vous pouvez faire tout cela pendant plusieurs jours !'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/