import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transactions: [{
      name: 'Referral',
      status: 'debt',
      date: '12-01-2021 12:00:00',
      value: 10000
    }, {
      name: 'Cashback',
      status: 'credit',
      date: '12-01-2021 13:00:00',
      value: 100000
    }, {
      name: 'Referral',
      status: 'debt',
      date: '12-01-2021 00:00:00',
      value: 10000
    }, {
      name: 'Referral',
      status: 'debt',
      date: '12-01-2021 00:00:00',
      value: 10000
    },
    {
      name: 'Referral',
      status: 'debt',
      date: '12-02-2021 12:00:00',
      value: 10000
    }, {
      name: 'Cashback',
      status: 'credit',
      date: '12-02-2021 13:00:00',
      value: 200000
    }, {
      name: 'Referral',
      status: 'debt',
      date: '12-02-2021 00:00:00',
      value: 20000
    }, {
      name: 'Referral',
      status: 'debt',
      date: '12-02-2021 00:00:00',
      value: 20000
    },
    {
      name: 'Referral',
      status: 'debt',
      date: '12-03-2021 12:00:00',
      value: 10000
    }, {
      name: 'Cashback',
      status: 'credit',
      date: '12-03-2021 13:00:00',
      value: 100000
    }, {
      name: 'Referral',
      status: 'debt',
      date: '12-03-2021 00:00:00',
      value: 10000
    }, {
      name: 'Referral',
      status: 'debt',
      date: '12-03-2021 00:00:00',
      value: 10000
    },
    {
      name: 'Referral',
      status: 'debt',
      date: '12-04-2021 12:00:00',
      value: 10000
    }, {
      name: 'Cashback',
      status: 'credit',
      date: '12-04-2021 13:00:00',
      value: 200000
    }, {
      name: 'Referral',
      status: 'debt',
      date: '12-04-2021 00:00:00',
      value: 20000
    }, {
      name: 'Referral',
      status: 'debt',
      date: '12-04-2021 00:00:00',
      value: 20000
    }]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
