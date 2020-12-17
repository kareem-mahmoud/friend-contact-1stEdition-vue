const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'K1',
                    name: 'kareem mahmoud',
                    phone: '01113335566',
                    email: 'kareem@gmail.com'
                },
                {
                    id: 'K2',
                    name: 'eslam mahmoud',
                    phone: '01113335566',
                    email: 'eslam@gmail.com'
                },
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com',
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com',
                }
            ],
            dataTarget: 'sba7 el foll'
        }
    }
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails()">
            {{ toVisible ? 'Hide' : 'Show' }} Details
        </button>
        <ul v-if="toVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            toVisible: false,
            friend: {
              id: 'manuel',
              name: 'Manuel Lorenzo',
              phone: '01234 5678 991',
              email: 'manuel@localhost.com',
            },
          };
    },
    methods: {
        toggleDetails() {
            this.toVisible = !this.toVisible;
        }
    }
});

app.mount("#app");