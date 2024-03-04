import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'


createApp({
data() {
    return {
    items: [
        { id: 1, name: 'Novillo' },
        { id: 2, name: 'Wille' },
        { id: 3, name: 'Ferencz' },
      ],
    items1: [
        { id: 1, name: 'CS' },
        { id: 2, name: 'MATH' },
        { id: 3, name: 'English' },
      ],
    items2: [
        { id: 1, name: '301' },
        { id: 2, name: '302' },
        { id: 3, name: '303' },
      ]
    };
},
computed: {
    selectedName(){
        if (this.selectedItem) {
            const selectedItem = this.items.find(item => item.id === this.selectedItem);
            return selectedItem ? selectedItem.name : '';
          }
    },
    selectedSubj(){
        if (this.selectedItem) {
            const selectedItem = this.items1.find(item => item.id === this.selectedItem);
            return selectedItem ? selectedItem.name : '';
          }
    },
    selectedRoom(){
        if (this.selectedItem) {
            const selectedItem = this.items2.find(item => item.id === this.selectedItem);
            return selectedItem ? selectedItem.name : '';
          }
    }

}
}).mount('#app');