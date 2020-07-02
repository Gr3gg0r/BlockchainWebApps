# BlockchainWebApps
 Untuk pelajar yang memerlukan pemahaman tentang pembangunan applikasi web menggunakan blockchain
 
#### Credit

Credit kepada Design Course  https://www.youtube.com/user/DesignCourse . Korang boleh melawat ke website 
https://coursetro.com/ ni untuk belajar tentang bidang pengaturcaraan computer

### Disclaimer

Sebenarnya tujuan aku buat ni nak buat tunjuk ajar agar boleh dijadikan panduan kepada pelajar2 yang mengunakan teknologi blockchain dalam pembanguan applikasi web mereka. Memandangkan tak banyak tutorial yang ada and mostly dah outdated and depricated . So aku dah cuba modern kan sedikit coding tersebut bagi memnuhi convention pengaturcaraan computer yang lebih tepat.

Secara jujurnya aku juga bukan orang yang pakar dalam bidang blockchain, repo ini dibuat berdasarkan web3js punya documentation.

# Jom Kita Start 

#### Apa yang korang perlu ada

Ada beberapa software yang perlu korang pasang pada computer korang sebelum memajukan diri korag dalam penulisan ini. Antaranya ialah,

1. Node Package Manager - Korang boleh dapat sekali time korang install nodejs.
2. Ganache-cli - Ini adalah emulator untuk blockchain , dia bantu korang communicate dengan korang punya   contract dalam blockchain.

   boleh dapatkan dengan mengunakan npm .

   ```npm install -g ganache-cli```
   

3. Visuat Studio Code. - atau text editor kebiasaan korang yang lain .


#### Langkah Pertama

Sila melayari http://remix.ethereum.org/, kat sini korang akan dihidangkan dengan interface baru , disebabkan tutorial2 kebanyakan tidak menngunakan interface baru tersebut.

Dalam tutorial ni aku buat adaptasi la dari new interface of Remix IDE.

![Home](/images/home.PNG)

Dekat home ni , korang bolehlah pilih untuk mengambil solidity sebagai environment atau suasana yang korang perlukan . Solidity adalah suasana IDE yang diperlukan kerana solidity membenarkan kita untuk membuat smart contract.


##### Smart Contract

Secara amnya , Smart Contract ini mewarisi ciri- ciri yang dimiliki oleh sesebuah contract dalam dunia nyata.

Adil , saksama , dan dipersetujui oleh semua orang.

Contract juga perlu ditepati dan tidak boleh diolah sesuka hati.

Disinilah fungsi blockchain dimanfaatkan kerana setiap block yang digunakan untuk menjalankan smartcontract ini akan kekal buat selama - lamanya , 

Disebabkan itulah keadaan yang terbaik untuk menunjukkan concept smart kontrak ini adalah dengan membuat suatu contoh contract berkaitan sistem pengundian.

Dimana system akan berjalan secara Decentralized dan tidak tertakluk kepada mana2 pengaruh. Hal ini menjadikan system tersebut kukuh dari serangan penggodaman dan bebas daripada pengaruh luar.


##### Penerangan Berkaitain REMIx IDE.

Setelah korang memilih suasana pembangunan system jenis solidity , korang akan di beri beberapa plugin iaitu 

``` Solidity Compiler , Deploy Transaction , Static Analysis ```

Tiga plugin yang diberikan mempunyai fungsi mereka yang tersendiri , antaranya ,

```Solidity Compiler ```

![Compiler](/images/compiler.PNG)

disini kita boleh memilih untuk menggunakan version compiler yang tersedia. Setiap version compiler memiliki keunikan mereka yang tersendiri , semakin baru versi compiler tersebut semakin lain cara yang akan digunakan untuk pengaturcaraan program.

Oleh itu disarankan untuk memilih compiler versi 0.4.18 agar tiada komplikasi yang akan berlaku semasa pembangunan system ini.



``` 

