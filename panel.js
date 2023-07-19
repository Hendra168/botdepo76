const payment = {
    qris: {
      link_nya: "https://telegra.ph/file/1f826ff9868afdf744ce1.jpg",
      atas_nama: "HENDRA STORE"
    },
    dana: {
      nomer: "082147078449",
      atas_nama: "SUT***M"
    },
    ovo: {
      nomer: "beku",
      atas_nama: "beku"
    }
}

const host = "https://node.elainaweb.my.id"
const application = {
    api_key: "ptla_YXVFAtx5xllJknpigLSSSzLO5ioDcnzAwNObbC0w1bV", //Ambil di panel lu || caranya pergi ke setting admin lalu klik garis tiga di pojok kiri atas lalu klik Application API tinggal salin dehh
    c_api_key: "ptlc_m0SSpGjnvrY4kQPslpVVXeYPvQUbGMR6TjGnC5mtl2a" //Ambil di panel lu || caranya pergi ke Account Setting atau klik avatar akun lalu klik API Credentials lalu isi DESCRIPTION isinya bebas lalu klik CREATE
}
const serverCreate = {
    nestId: "5", //Nest Id panel lu
    eggId: " 15", //Egg Id panel lu
    limits: {
      db: "1", //Mending ga usah diganti
      backups: "1", //Mending ga usah diganti
      allocation: "1" //ALLOCATION Id panel lu 
    },
    eggs: {
      environment: {
        "STARTUP_CMD": "npm install", // Sesuai in sama egg lu
        "CMD_RUN": "npm start"
      }
    }
}

module.exports = { host, application, serverCreate, payment }