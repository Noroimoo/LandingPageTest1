// End.js
export function createEnd() {
  const end = document.createElement('div');
  end.innerHTML = `
    <div>
      <div class="lootbox">
            <div class="Watch">Watch the videos and <span class="green">get the boxes</span></div>
            <p class="smallerText">While watching the feed you can get boxes with NFT or LEE tokens</p>
            <img class="lootboximg" src="Public/Lootbox.png" alt="">
        </div>

        <div class="rectangle">
            <img class="ArrowLeft" src="Public/ArrowLeft.svg" alt="">
            <p class="Dontmiss">Don't miss the <span class="green">Presale</span></p>

            <button>Buy NFT glasses</button>
            <img class="ArrowRight"src="Public/ArrowRight.svg" alt="">
        </div>

        <div class="AlreadyLaunched">
            <p>Cheelee team has <span class="green">already launched product</span></p>
            <div class="smallerText">The project is based on the already launched in 2021 short video platform – NUTSon (1.5M users, 33% engagement rate and 15K videos created daily)</div>    
            <img class="image three" src="Public/ThirdPhone.png" alt="">
        </div>
    </div>
    </div>
  `;
  return end;
}
