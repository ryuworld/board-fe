<template>
    <div>
        <table>
            <caption>{{ title }}</caption>
            <tbody>
                <tr v-for="(value, index) in list" :key="index">
                <td>{{ value.title }}</td>
                <td>{{ value.date }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

const list = [
  {
    title: '안녕하세요',
    user: '1',
    date: "22 - 03 - 27",
  },
  {
    title: '반갑습니다',
    user: '2',
    date: "22 - 03 - 28",
  },
  {
    title: '무슨내용을할까요',
    user: '1',
    date: "22 - 03 - 29",
  },
  {
    title: '임의로 넣는 데이터',
    user: '1',
    date: "22 - 03 - 30",
  }, {
    title: 'test',
    user: '1',
    date: "22 - 03 - 31",
  }
]

import axios from 'axios'

export default {
  name: "NoticeList",
  props: {
    id: String,
  },
  data() {
    return {
      list,
    };
  },
  created() {
    axios.get(`/board/${this.id}`).then((res) => {
      const { data } = res;
      this.list = data;
    });
  }
}
</script>

<style>
</style>