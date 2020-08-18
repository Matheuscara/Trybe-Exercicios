const bestOfOliva = [
    {
      artist: 'Radiohead',
      bestAlbuns: [
        {
          name: "In Rainbows",
          rate: 100
        },
        {
          name: "Kid A",
          rate: 95
        },
        {
          name: "OK Computer",
          rate: 90
        },
        {
          name: "Pablo Honey",
          rate: 80
        }
      ],
      genre: "Rock",
      country: "England",
    },
    {
      artist: 'Avenged Sevenfold',
      bestAlbuns: [
        {
          name: "City of Evil",
          rate: 99
        },
        {
          name: "Avenged Sevenfold",
          rate: 98
        },
        {
          name: "Sounding the Seventh Trumpet",
          rate: 95
        },
        {
          name: "Diamonds in the Rough",
          rate: 80
        }
      ],
      genre: 'Hard Rock',
      country: "United States",
    },
    {
      artist: 'Arctic Monkeys',
      bestAlbuns: [
        {
          name: "Humbug",
          rate: 100
        },
        {
          name: "AM",
          rate: 99
        },
        {
          name: "Favourite Worst Nightmare",
          rate: 95
        },
        {
          name: "Whatever People Say I Am, That's What I'm Not",
          rate: 90
        }
      ],
      genre: 'Indie Rock',
      country: "England",
    },
    {
      artist: 'Pink Floyd',
      bestAlbuns: [
        {
          name: "Wish You Were Here",
          rate: 100
        },
        {
          name: "Dark Side of the Moon",
          rate: 100
        },
        {
          name: "Animals",
          rate: 100
        },
        {
          name: "A Saucerful of Secrets",
          rate: 98
        }
      ],
      genre: 'Progressive Rock',
      country: "England",
    },
    {
      artist: 'Foo Fighters',
      bestAlbuns: [
        {
          name: "Wasting Light",
          rate: 100
        },
        {
          name: "Sonic Highways",
          rate: 90
        },
        {
          name: "Concrete and Gold",
          rate: 90
        },
        {
          name: "Echoes, Silence, Patience & Grace",
          rate: 85
        }
      ],
      genre: 'Rock',
      country: "United States",
    },
    {
      artist: 'Red Hot Chili Peppers',
      bestAlbuns: [
        {
          name: "Stadium Arcadium",
          rate: 100
        },
        {
          name: "Californication",
          rate: 99
        },
        {
          name: "By the Way",
          rate: 97
        },
        {
          name: "The Getaway",
          rate: 95
        }
      ],
      genre: 'Rock',
      country: "United States"
    },
    {
      artist: 'Zeca Pagodinho',
      bestAlbuns: [
        {
          name: "X",
          rate: 0
        }
      ],
      genre: 'Samba',
      country: "Brasil"
    }
  ];
  
  // Seção que mostra o primeiro album da banda que recebeu nota acima de 95!
  const awardedAlbuns = bestOfOliva
    .map(band => {
      const bandName = band.artist;
      const topAlbum = band.bestAlbuns.find(album => album.rate >= 95);
  
      return {
        artist: bandName,
        album: topAlbum
      };
    })
    .filter(item => item.album !== undefined);
  
  console.table(awardedAlbuns);
  
  // Seção que mostra o top album das bandas inglesas
  const topEnglandAlbuns = bestOfOliva
    .filter(band => band.country === "England")
    .flatMap(band => band.bestAlbuns)
    .sort((firstAlbum, secondAlbum) => secondAlbum.rate - firstAlbum.rate);
  
  console.log(topEnglandAlbuns); 