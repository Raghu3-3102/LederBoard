import { createSlice } from '@reduxjs/toolkit';

const raceSlice = createSlice({
  name: 'race',
  initialState: [
    { rank: 1, name: 'John Doe', carName: 'Ferrari', time: '1:42:301',newUser:false },
    { rank: 2, name: 'Jane Smith', carName: 'Lamborghini', time: '1:44:155',newUser:false },
    { rank: 3, name: 'Sam Brown', carName: 'Porsche', time: '1:45:206',newUser:false  },
    { rank: 4, name: 'Emily White', carName: 'McLaren', time: '1:46:054',newUser:false  },
    { rank: 5, name: 'John Doe', carName: 'Ferrari', time: '1:42:308' },
    { rank: 6, name: 'Jane Smith', carName: 'Lamborghini', time: '1:44:158',newUser:false  },
    { rank: 7, name: 'Sam Brown', carName: 'Porsche', time: '1:45:208',newUser:false  },
    { rank: 8, name: 'Emily White', carName: 'McLaren', time: '1:46:055',newUser:false  },
    { rank: 9, name: 'Sam Brown', carName: 'Porsche', time: '1:45:20',newUser:false  },
    { rank: 10, name: 'Emily White', carName: 'McLaren', time: '1:46:075',newUser:false  },
    { rank: 11, name: 'John Doe', carName: 'Ferrari', time: '1:42:370',newUser:false  },
    { rank: 12, name: 'Jane Smith', carName: 'Lamborghini', time: '1:44:615',newUser:false  },
    { rank: 13, name: 'Sam Brown', carName: 'Porsche', time: '1:45:20',newUser:false  },
    { rank: 14, name: 'Emily White', carName: 'McLaren', time: '1:46:085',newUser:false  },
    { rank: 15, name: 'John Doe', carName: 'Ferrari', time: '1:42:380',newUser:false  },
    { rank: 16, name: 'Jane Smith', carName: 'Lamborghini', time: '1:44:175',newUser:false  },
    { rank: 17, name: 'Sam Brown', carName: 'Porsche', time: '1:45:270',newUser:false  },
    { rank: 18, name: 'Emily White', carName: 'McLaren', time: '1:46:075',newUser:false  },
    { rank: 19, name: 'Sam Brown', carName: 'Porsche', time: '1:45:270',newUser:false  },
    { rank: 20, name: 'Emily White', carName: 'McLaren', time: '1:46:075',newUser:false  },
    // Add more data as needed
  ],
  reducers: {
    addEntry: (state, action) => {
      // Add new entry
      console.log(action.payload);
      state.push(action.payload);
      // Sort entries by time
      state.sort((a, b) => {
        const timeA = a.time.split(':').reduce((acc, time) => (60 * acc) + +time);
        const timeB = b.time.split(':').reduce((acc, time) => (60 * acc) + +time);
        return timeA - timeB;
      });
      // Update ranks
      state.forEach((entry, index) => {
        entry.rank = index + 1;
      });
    },
  },
});

export const { addEntry } = raceSlice.actions;
export default raceSlice.reducer;
