// Example hotel amenities
const amenityOptions = [
  'Wired Internet Access',
  'Wi-fi',
  'Sun loungers',
  'TV lounge',
  'Wheelchair-accessible',
  'Air conditioning',
  'Express check-in/check-out',
  'Newspapers',
  'Small pets allowed (under 5 kg)',
  'Pets allowed',
  'Car park',
  'Car Park (Accessible)',
  'Heating',
  'Indoor pool',
  'Dry cleaning/laundry service',
  'ATM',
  'Currency Exchange',
  'Spa',
];

// Example holiday package inclusions
const inclusiveOptions = [
  'flight',
  'flight (including transport to/from airport)',
  'hotel',
  'car rental',
  'breakfast',
  'meals',
  'kid meals',
];

// Test data for holiday packages
/** Locations
 * Italy - Venice
 * France - Paris
 * South Korea - Seoul
 * India - Agra - Taj Mahal location
 * Brazil - Rio de Janeiro
 * Maldives - Baros
 * ---
 * Spain - Tenerife
 * Spain - Barcelona
 */
const testPackagesData = [
  {
    thumbnail: '/pkg_seoul-south-korea.jpg',
    location: 'Seoul, South Korea',
    numOfNights: 3,
    inclusive: ['Flight', 'Hotel'],
    amenities: [
      'Wired internet access',
      'Wi-fi',
      'Express check-in/check-out',
      'ATM',
      'Currency exchange',
    ],
    price: 637,
  },
  {
    thumbnail: '/pkg_agra-india.jpg',
    location: 'Agra, India',
    numOfNights: 6,
    inclusive: ['Flight', 'Hotel', 'Transport to/from airport', 'Meals'],
    amenities: [
      'Wi-fi',
      'Sun loungers',
      'Air conditioning',
      'Spa',
      'Indoor pool',
    ],
    price: 824,
  },
  {
    thumbnail: '/pkg_rio-de-janeiro-brazil.jpg',
    location: 'Rio De Janeiro, Brazil',
    numOfNights: 6,
    inclusive: ['Flight', 'Hotel', 'Kid meals'],
    amenities: [
      'Wi-fi',
      'Pets allowed',
      'Car Park (Accessible)',
      'Wheelchair-accessible',
      'Indoor pool',
    ],
    price: 1977,
  },
  {
    thumbnail: '/pkg_maldives.jpg',
    location: 'Villingili, Maldives',
    numOfNights: 6,
    inclusive: ['Flight', 'Hotel', 'Transport to/from airport', 'Meals'],
    amenities: [
      'Wired Internet Access',
      'Wi-fi',
      'Express check-in/check-out',
      'Spa',
      'Air conditioning',
      'Sun loungers',
      'TV lounge',
    ],
    price: 1399,
  },
  {
    thumbnail: '/pkg_venice-italy.jpg',
    location: 'Venice, Italy',
    numOfNights: 7,
    inclusive: ['Flight', 'Hotel', 'Transport to/from airport', 'Breakfast'],
    amenities: [
      'Wi-fi',
      'Air conditioning',
      'Bar',
      'Babysitting',
      'Laundry',
      'Express check-in/check-out',
      '24hr reception',
    ],
    price: 840,
  },
  {
    thumbnail: '/pkg_paris-france.jpg',
    location: 'Paris, France',
    numOfNights: 7,
    inclusive: ['Flight', 'Hotel', 'Breakfast'],
    amenities: [
      'Wi-fi',
      'Air conditioning',
      'Bar',
      'Babysitting',
      '24hr reception',
      'Concierge service',
      'Coffee house',
      'Daily maid service',
    ],
    price: 645,
  },
];
