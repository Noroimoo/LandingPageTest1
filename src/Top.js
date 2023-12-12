// Top.js
export function createTop() {
  const top = document.createElement('div');
  top.innerHTML = `
    <div>
     <div class="firstScreen">  
      <div class="slogan">
      <p>GameFi</p> 
      <p>short video</p> <div class="green"> plaform</div></p>
      <div class="smallertext"><p>Watch. Play. Earn</p></div>
      </div>

      <div class="prereg">
        <img class="googleplay" src="Public/GooglePlay.png" alt="">
        <p class="preregtext">Pre-registration in Google Play</p>
      </div>

       <img class="image one" src="Public/FirstPhone.png" alt="">

      <div class="socialLinks">
        <img src="Public/Discord.svg" alt="">
        <img src="Public/Telegram.svg" alt="">
        <img src="Public/Twitter.svg" alt="">
        <img src="Public/Facebook.svg" alt="">
        <img src="Public/Instagram.svg" alt="">
        <img src="Public/PatreonMaybe.svg" alt="">
      </div>
    </div>
    </div>
  `;
  return top;
}
