const { createApp } = Vue;

createApp({
  data() {
    return {
      snils: '',
      phone: '',
      email: '',
      place: '',
      type: 'student',
      selectedCopies: 1,
      successMessage: '',
      errors: {},
    };
  },
  methods: {
    validateForm() {
      this.errors = {};
      if (!this.snils) this.errors.snils = 'Введите СНИЛС';
      if (!this.phone) this.errors.phone = 'Введите телефон';
      if (!this.email) this.errors.email = 'Введите email';
      return Object.keys(this.errors).length === 0;
    },
    submitForm() {
      if (!this.validateForm()) return;

      this.successMessage = 'Заявка успешно отправлена!';

      setTimeout(() => {
        this.successMessage = '';
        this.snils = '';
        this.phone = '';
        this.email = '';
        this.place = '';
        this.selectedCopies = 1;
        this.type = 'student';
      }, 3000);
    },
    selectCopies(num) {
      this.selectedCopies = num;
    }
  }
}).mount('#app');
