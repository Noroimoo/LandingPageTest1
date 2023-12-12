// Middle.js
export function createMiddle() {
  const middle = document.createElement('div');
  middle.innerHTML = `
    <div>
      <div class="mission">
        <div class="cheelees-mission">
            <div class="green"><span>Cheelee’s</span></div><span class="mission">mission</span>
        </div>

        <div class="TextFluff1">Users spend an average of 2.5 hours daily on social networks and get nothing fоr it. We believe that this is unfair</div>
        <div class="TextFluff2">Our mission is to provide everyone with the opportunity to monetize time in social networks</div>
         
        <p class="attentionEconomy"> <span class="green">Cheelee</span> works within the "Attention Economy" framework</p>
        <div class="TextFluff-container1">
        <div class="TextFluff3">Other social media consider a user as an information and advertising influence target, but a Cheelee user is a full system member, partner and beneficiary</div>
        <div class="TextFluff4"> The main idea is that attention is converted into income with digital platforms. You pay your attention to what you want, and get paid for it. Your attention has a certain cost.</div>
        </div>
        <div class="TextFluff-container2">
        <div class="TextFluff5">The Attention Economy sees human attention as a scarce commodity making it a new oil! The founder of this concept is the Nobel laureate Herbert Simon</div>
        <div class="TextFluff6">Through the GameFi mechanics, Cheelee’s users earn together with the platform by converting their attention into money</div> 
        </div>
    </div>

    <div class="SignUpNow">
        <div class="NumbersMasonWhatDoTheyMean">
            <div class="a1">1</div>
            <div class="a2">2</div>
            <div class="a3">3</div>
            <div class="a4">4</div>
            <div class="a5">5</div>
        </div>
        <img class="image two" src="Public/SecondPhone.png" alt="">
        <div class="cryptoStuff">
            <p class="p1">Sign-up and get your <span class="green"> NFT glasses</span></p>
            <p class="p2">Watch the feed and get the boxes <span class="green">with LEE tokens</span></p> 
            <p class="p3">Buy your NFT glasses and get <span class="green">LEE tokens</span> directly when watching the feed</p>
            <p class="smol">The higher the rarity of your NFT glasses, the more points you get when leveling them up - the more tokens you can earn</p> 
            <p class="p4">Upgrade your <span class="green">NFT glasses</span></p>
            <p class="p5"><span class="green">Buy additional NFT glasses</span> to increase the amount of Attention and rewarded time of watching the feed</p>
            <div class="smol smoltwo">1 Attention = 10 minutes of rewarded feed viewing</div>
        </div>
    </div>
  `;
  return middle;
}
