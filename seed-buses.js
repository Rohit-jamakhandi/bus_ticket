require('dotenv').config();
const mongoose = require('mongoose');
const Bus = require('./models/Bus');

const sampleBuses = [
  {
    bus_id: 'MH01',
    bus_name: 'Shivneri Express',
    from: 'Mumbai',
    to: 'Pune',
    date: '2025-10-02',
    time: '06:00',
    seats_total: 40,
    available_seats: 40,
    fare: 350
  },
  {
    bus_id: 'MH02',
    bus_name: 'Volvo AC Sleeper',
    from: 'Mumbai',
    to: 'Pune',
    date: '2025-10-02',
    time: '09:30',
    seats_total: 36,
    available_seats: 36,
    fare: 550
  },
  {
    bus_id: 'MH03',
    bus_name: 'Maharashtra Express',
    from: 'Mumbai',
    to: 'Pune',
    date: '2025-10-02',
    time: '14:00',
    seats_total: 40,
    available_seats: 40,
    fare: 400
  },
  {
    bus_id: 'MH04',
    bus_name: 'Night Rider',
    from: 'Mumbai',
    to: 'Pune',
    date: '2025-10-02',
    time: '22:00',
    seats_total: 32,
    available_seats: 32,
    fare: 500
  },
  {
    bus_id: 'DL01',
    bus_name: 'Delhi Express',
    from: 'Delhi',
    to: 'Bangalore',
    date: '2025-10-02',
    time: '08:00',
    seats_total: 40,
    available_seats: 40,
    fare: 1200
  },
  {
    bus_id: 'DL02',
    bus_name: 'Bangalore Flyer',
    from: 'Delhi',
    to: 'Bangalore',
    date: '2025-10-02',
    time: '18:00',
    seats_total: 36,
    available_seats: 36,
    fare: 1500
  },
  {
    bus_id: 'BLR01',
    bus_name: 'Chennai Express',
    from: 'Bangalore',
    to: 'Chennai',
    date: '2025-10-02',
    time: '07:00',
    seats_total: 40,
    available_seats: 40,
    fare: 600
  },
  {
    bus_id: 'BLR02',
    bus_name: 'Hyderabad Super',
    from: 'Bangalore',
    to: 'Hyderabad',
    date: '2025-10-02',
    time: '10:00',
    seats_total: 40,
    available_seats: 40,
    fare: 700
  },
  {
    bus_id: 'HYD01',
    bus_name: 'Mumbai Express',
    from: 'Hyderabad',
    to: 'Mumbai',
    date: '2025-10-02',
    time: '16:00',
    seats_total: 40,
    available_seats: 40,
    fare: 900
  },
  {
    bus_id: 'CHN01',
    bus_name: 'Bangalore Volvo',
    from: 'Chennai',
    to: 'Bangalore',
    date: '2025-10-02',
    time: '20:00',
    seats_total: 36,
    available_seats: 36,
    fare: 650
  }
];

async function seedBuses() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing buses
    await Bus.deleteMany({});
    console.log('Cleared existing buses');

    // Insert sample buses
    await Bus.insertMany(sampleBuses);
    console.log(`✅ Successfully added ${sampleBuses.length} buses to the database!`);

    console.log('\nSample routes added:');
    console.log('- Mumbai → Pune (4 buses)');
    console.log('- Delhi → Bangalore (2 buses)');
    console.log('- Bangalore → Chennai (1 bus)');
    console.log('- Bangalore → Hyderabad (1 bus)');
    console.log('- Hyderabad → Mumbai (1 bus)');
    console.log('- Chennai → Bangalore (1 bus)');

    console.log('\n🎉 Database seeded successfully!');
    console.log('You can now search for buses on http://localhost:3000');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedBuses();
