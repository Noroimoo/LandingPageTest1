export function createHeader() {
    const header = document.createElement('div');
    header.innerHTML = `
      <nav>
        <header>
        <div class="logo">
        <img class="PepperBody" src="Public/wholePepepr.png" alt="">
        <img class="chelee" src="Public/Name.svg">
        <div class="ByWho">BY NUTSon</div>
        </div>
        <div class="MainHeaderPart">
        <p>About Us</p>
        <p>Roadmap</p>
        <p>Documents</p>
        <p>F.A.Q.</p>
        <p><div class="green">Buy NFT glasses</div></p>
        </div>

        <div class="cryptoThing">
            <img class="Coin1" src="Public/PepperCoin.png" alt="">
           <div class="box">
           <p class="evensmallerText">CHEEL</p>
           <p class="bold">$8,00</p>
           </div>
           <img src="Public/UpSign.svg" alt="">
           <img class="Coin2"src="Public/GlassCoin.png" alt="">
           <div class="box">
           <p class="evensmallerText">LEE</p>
           <p class="bold">$8,00</p>
           </div>
           <img  src="Public/UpSign.svg" alt="">
        </div>

        <div class="CertifiedBy">
            <div class="vector-parent">
            <img class="Logo" alt="" src="Public/CertikLogo.svg">
            <div class="lilshield"><img class="Checkmark" alt="" src="Public/Checkmark.svg">
            <img class="shield" src="Public/Shield.png" alt = ""></div>
            <div class="box"><div class="audited-by">AUDITED BY</div>
            <img class="CertikName" alt="" src="Public/CertikName.svg">
            </div>
        </div>

        <div class="languageDropdown"><p>EN</p>
        <img src="Public/DownSign.svg" alt=""></div>
    </header>
      </nav>
    `;
    return header;
}
