const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise(
    (resolve, reject) => {
      const out = (async()=>{
        const dataixx = await promiseTheaterIXX();
        const datavgc = await promiseTheaterVGC();
        let total = 0;
        //hitung emosi ixx
        for(var k in dataixx) {
          if(dataixx[k].hasil == emosi){
            total++;
          }
        }

        for(var k in datavgc) {
          if(datavgc[k].hasil == emosi){
            total++;
          }
        }
        return total;
      })();
      resolve(out);
    }
  );
};

module.exports = {
  promiseOutput,
};
