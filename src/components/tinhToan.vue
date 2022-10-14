<template>
  <div class="div-tong">
    <input
      type="number"
      v-on:change="calculate"
      v-model="numberA"
      placeholder="Nhập số a"
    />
    <input
      type="text"
      class="toantu"
      v-on:change="calculate"
      v-model="toanTu"
    />
    <input
      type="number"
      v-on:change="calculate"
      v-model="numberB"
      placeholder="Nhập số b"
    />
    <label>=</label>
    <input
      type="number"
      class="toantu"
      v-model="ketqua"
      placeholder="Kết quả"
    />
  </div>
  <label v-if="ketqua > 100">Giá trị lớn hơn 100</label>
  <label v-else>Giá trị nhỏ hơn 100</label>
  <!-- <label v-if="Number.isInterger(ketqua)">Giá trị là số nguyên</label>
  <label v-else>Giá trị không phải số nguyên</label> -->

</template> 

<script>
export default {
  data() {
    return {
      ketqua: 0,
      toanTu: "+",
    };
  },
  
  methods: {
    calculate() {
      if (this.toanTu === "+") {
        this.ketqua = this.numberA + this.numberB;
      } else if (this.toanTu === "-") {
        this.ketqua = this.numberA - this.numberB;
      } else if (this.toanTu === "*") {
        this.ketqua = this.numberA * this.numberB;
      } else if (this.toanTu === "/") {
        this.ketqua = this.numberA / this.numberB;
      } else if (this.toanTu === "1") {
        this.ketqua =
          this.numberA * this.numberA +
          2 * this.numberA * this.numberB +
          this.numberB * this.numberB;
      } else if (this.toanTu === "2") {
        this.ketqua =
          this.numberA * this.numberA -
          2 * this.numberA * this.numberB +
          this.numberB * this.numberB;
      } else if (this.toanTu === "3") {
        this.ketqua =
          (this.numberA - this.numberB) * (this.numberA + this.numberB);
      }
    },
  },
};
</script>

<style scoped>
.div-tong {
  display: flex;
}
.toantu {
  width: 10%;
  text-align: center;
}
</style>