import React from 'react'
import axios from 'axios'
import QRCode from 'react-qr-code'

const CetakLokasi = (props) => {
    const [lokasi, setLokasi] = React.useState({})
    let id = props.match.params.id

    React.useEffect(() => {
        axios
            .get(`http://localhost:3009/lokasi/info/${id}`)
            .then((response) => {
                setLokasi(response.data)
            })
    }, [id])

    return (
        <div className="container mt-5 text-center" style={{width:'21cm', height:'29.7cm'}}>
            <style>
                { `
                    .printQr {display: none}
                    .logo-kerajaan { height:120px; padding: 0 10px}
                    .logo-kkm { height:130px; padding: 0 10px}
                    .msg-area { padding: 8px; font-size:30px; font-weight:'400'}
                    `
                 }
                {`@media print {
                    .logo-kerajaan { height:150px; padding: 0 10px}
                    .logo-kkm { height:160px; padding: 0 10px}
                    .contacts{display: none;}
                    .content-area{margin-top:150px}
                    .webQr{ display: none}
                    .printQr{ display: block; margin-bottom: 60px}
                    .msg-area { fontSize: 40px}
                    .memo { fontSize: 20px !important}
                    .head-area { padding: 20px 0}
                    .msg-area { padding: 8px; font-size:40px; font-weight:'400'}
                }`}
            </style>
            <div style={{borderWidth:10, borderColor:'black', borderStyle:'solid'}}>
                <div className="head-area">
                    <img alt="kerajaan malaysia" 
                        className="logo-kerajaan"
                        src="https://www.malaysia.gov.my/media/uploads/c9558a31-7723-4558-9fee-f69baca119ff.png" />
                    <img
                        className="img-fluid mt-5 mb-5 logo-kkm"
                        src="https://pbs.twimg.com/profile_images/2132747919/kami_sedia_membantu_400x400.jpg"
                        alt="hospital kajang"
                    />
                </div>

                <div className="msg-area" style={{backgroundColor:'black', color:'white'}}>
                    SILA SCAN QR CODE UNTUK DAFTAR MASUK
                </div>

                <div className="content-area">
                <div className="mt-5">
                        <div className="webQr">
                            <QRCode value={id} />
                        </div>
                        <div className="printQr">
                            <QRCode value={id} size={500} />
                        </div>
                        
                    </div>

                    <div style={{paddingTop:30, paddingBottom:30}}>
                    <h1>HOSPITAL KAJANG SELANGOR</h1>
                    <h2>{lokasi.nama_cawangan}</h2>
                    <h3>{lokasi.alamat}</h3>
                    </div>
                    
                    <div className="memo" style={{paddingBottom:40, paddingTop: 40}}>
                        Sila gunakan applikasi QRCode atau Kamera telefon untuk mengimbas qrcode ini
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CetakLokasi
