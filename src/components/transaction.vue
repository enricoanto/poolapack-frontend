<template>
  <div id="transaction">
    <div class="transaction-button">
      <div class="button-box">
        <button v-if="button_semua === true" class="filter-button-focus">Semua</button>
        <button v-else class="filter-button" @click="semua()">Semua</button>
        <button v-if="button_masuk === true" class="filter-button-focus">Point Masuk</button>
        <button v-else class="filter-button" @click="pointMasuk()">Point Masuk</button>
        <button v-if="button_keluar === true" class="filter-button-focus">Point Keluar</button>
        <button v-else class="filter-button" @click="pointKeluar()">Point Keluar</button>
      </div>
      <div class="calender-box">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 11H8V13H6V11ZM6 15H8V17H6V15ZM10 11H18V13H10V11ZM10 15H15V17H10V15Z"
            fill="#F9BE00"
          />
        </svg>
        <date-picker
          input-class="date-picker"
          v-model="date"
          confirm
          :lang="lang"
          format="DD-MMM-YYYY"
          placeholder="masukan tanggal"
          range
        >
          <i slot="calendar-icon"></i>
        </date-picker>
      </div>
    </div>
    <div v-for="(transaction, i) in transactions" :key="i">
      <div class="transaction">
        <div class="transaction-header flex-style">
          <p class="date-text">{{transaction.dateStr}}</p>
          <p class="clock-text">{{transaction.time}} WIB</p>
        </div>
        <div class="flex-style transaction-content">
          <div class="flex-style name-box">
            <img
              width="32"
              v-if="transaction.status==='credit'"
              height="32"
              src="../assets/credit.png"
              alt="credit"
            />
            <img width="32" v-else height="32" src="../assets/debt.png" alt="debt" />

            <p class="name-text">{{transaction.name}}</p>
          </div>
          <div class="value-box">
            <p class="value-text">{{transaction.value.toLocaleString('id-ID')}}</p>
            <div class="flex-style value-footer-box">
              <img width="16" height="16" class src="../assets/coin.png" alt="coin" />
              <p class="value-footer-text">PoolPoint</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime, formatDay, formatMonth } from 'node-format-date'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/locale/id'
import 'vue2-datepicker/index.css'
export default {
  name: 'Transaction',
  components: { DatePicker },
  data () {
    return {
      filter: '',
      date: [new Date(new Date().valueOf() - 1000 * 60 * 60 * 24), new Date()],
      lang: {
        formatLocale: {
          firstDayOfWeek: 1
        },
        monthBeforeYear: false
      },
      button_semua: true,
      button_masuk: false,
      button_keluar: false
    }
  },
  methods: {
    semua () {
      this.filter = ''
      this.button_semua = true
      this.button_masuk = false
      this.button_keluar = false
    },
    pointMasuk () {
      this.filter = 'credit'
      this.button_semua = false
      this.button_masuk = true
      this.button_keluar = false
    },
    pointKeluar () {
      this.filter = 'debt'
      this.button_semua = false
      this.button_masuk = false
      this.button_keluar = true
    }
  },
  computed: {
    transactions () {
      let array = this.$store.state.transactions
      const start = new Date(
        `${this.date[0].getFullYear()},${this.date[0].getMonth() +
          1},${this.date[0].getDate()}`
      )
      const end = new Date(
        `${this.date[1].getFullYear()},${this.date[1].getMonth() +
          1},${this.date[1].getDate() + 1}`
      )
      array.sort((a, b) => new Date(b.date) - new Date(a.date))
      array.map(el => {
        el.time = formatTime(el.date)
        el.dateStr = `${formatDay(el.date)}, ${new Date(
          el.date
        ).getDate()} ${formatMonth(el.date).slice(0, 3)} ${new Date(
          el.date
        ).getFullYear()}`
        return el
      })
      if (this.filter) {
        array = array.filter(el => el.status === this.filter)
      }
      array = array.filter(
        el => new Date(el.date) >= start && new Date(el.date) < end
      )
      return array
    }
  }
}
</script>

<style>
.transaction {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #eef2f5;
  margin-inline: 30px;
}
.transaction-button {
  display: flex;
  justify-content: space-between;
  margin-inline: 30px;
}
.calender-box {
  display: flex;
  border: solid;
  border-color: #f9be00;
  border-width: 0.5px;
  height: 40px;
  width: 250px;
  margin: 0 5px 20px 0;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding-inline: 10px;
}
.date-picker {
  border: none;
  color: #f9be00;
  font-size: 16px;
  text-align: center;
}
.filter-button {
  border-width: 0.5px;
  border-radius: 10px;
  border-color: #8c8ca1;
  background-color: none;
  color: #8c8ca1;
  height: 40px;
  width: 120px;
  margin: 0 5px 20px 0;
}
.filter-button-focus {
  border: none;
  background-color: #fef5d9;
  color: #f9be00;
  height: 40px;
  width: 120px;
  margin: 0 5px 20px 0;
}
.date-text {
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  margin: 0;
}
.clock-text {
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 300;
  color: #383535;
  margin: 0 0 0 10px;
}
.name-box {
  justify-content: center;
  align-items: center;
  margin: 31px 0 50px 0;
}
.name-text {
  font-size: 24px;
  font-weight: 700;
  color: #383535;
  margin: 0 0 0 15px;
}
.value-box {
  justify-content: center;
  align-items: center;
  margin: 31px 0 0 0;
}
.value-text {
  font-size: 24px;
  font-weight: bold;
  color: #f9be00;
  text-align: end;
  margin: 0;
}
.value-footer-box {
  justify-content: center;
  align-items: center;
}

.value-footer-text {
  font-size: 12px;
  font-weight: 700;
  color: #9797aa;
  margin: 0 0 0 5px;
}
.flex-style {
  display: flex;
}

.transaction-content {
  justify-content: space-between;
  margin: 0;
}
</style>
