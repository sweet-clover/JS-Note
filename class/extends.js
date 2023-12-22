class DateFormatter extends Date {
    getFormattedDate() {
      return this.toLocaleString()
      //toLocaleString ဆိုတဲ့ function က Date interface ထဲမှာရှိတယ်
      //extends လုပ်ထားတဲ့ class ထဲက ယူသုံးတဲ့ သဘောပဲ
    }
  }

let date = new DateFormatter()
console.log(date.getFormattedDate()) //'12/14/2023, 11:06:07 AM'