import React from "react";
//import axios from "axios";
import './home.css';


var wjqenData = "과격한,독한,행복한,사고뭉치,고독한,거대,센척하는,메인 보컬,리얼,도망가는,몽글몽글,기죽은,미니,날으는,낭만적인,아름다운,쏠쏠한,서두르는,불타는,스페셜,우람한,털털한,엘레강스,자유로운,혼돈의,딱딱한,위대한,어디서 본듯한,수수한,자랑스러운,천방지축,폼생폼사,초롱초롱,포효하는,어둠의,못말리는,낙천적인,차가운,소중한,가벼운,슬픈,최고의,패기있는,짓궂은,지나가던,부들부들,고뇌하는,착한,전설적인,비싼,불사신,속상한,자연스러운,우두머리,정신없는,고전적인,가련한,착실한,의문의,환상적인,새초롬한,돌로 만든,탁월한,파릇파릇한,떠돌이,매력적인,길쭉한,감칠맛나는,상쾌한,날카로운,새우,신나는,인기있는,논리적인,미소천사,고급진,따뜻한,용감한,로맨틱,돌진하는,신성한,무서운,현대적인,수수께끼,총명한,타락한,한결같은,명랑한,영원한,용맹한,싱글벙글,재기발랄한,톡톡튀는,친절한,순진한,대범한,질풍노도,폭주하는,벼락부자,얼어붙은,차분한,진지한,허술한,애증의,끝내주는,특별한,피곤한,애매한,당당한,질긴,지혜로운,속삭이는,유명한,신비로운,잔망스러운,멋쟁이,고요한,얌전한,당찬,품위있는,사랑의,쿨한,포실한,설레는,졸린,예쁜,전형적인,정열적인,노련한,억울한,이웃집,돌아온,샤방샤방,노력파,천년묵은,위풍당당,싱싱한,음흉한,느끼한,뽀송뽀송,쫄깃쫄깃,잠자는,발빠른,바쁜,질주하는,얼큰한,부드러운,비범한,스마트한,통쾌한,재간둥이,까다로운,황야의,짱짱한,따끈따끈,나른한,기운찬,구슬픈,유쾌한,숨겨진,폭풍,허약한,논리정연한,펄떡이는,미묘한,부끄럼쟁이,강철,성스러운,반짝반짝,떠오르는,비주얼,갓 나온".split(',');
var wjqalData = "비스킷,대학자,장난꾸러기,날다람쥐,사슴벌레,수수팥떡,파인애플,구미호,마카롱,염소,악동,잉어,비상쏠베감펭,상어,토끼,거인,악어,날쌘돌이,납작만두,매생이,바다사자,개복치,배추,감자칩,박사님,대스타,상속자,키위새,말미잘,코뿔소,치킨,종이학,꿀벌,끈끈이주걱,칠면조,당근,마카다미아,카라멜,목도리도마뱀,독수리,사랑꾼,북극곰,아귀,악어,용병,올빼미,백설기,베이비슈,닭다리,도토리,격투가,떠돌이,애늙은이,앵무새,미꾸라지,악어새,알사탕,아기,브로콜리,동치미,메기,고추냉이,도사,어린왕자,긴팔원숭이,주술사,매미,식충식물,바나나,도사,수박,거대괴수,펭귄,탕수육,잠자리,야옹이,사냥꾼,거인,하이에나,시리얼,강낭콩,수다쟁이,코끼리,귀족,백합,고집쟁이,흑마법사,산호,김치찌개,왕자,소나무,대추,플랑크톤,젤리,꾀꼬리,여우,단무지,날치,가오리,고구마,길잡이,조랑말,달팽이,갈매기,네잎클로버,왕만두,천사,보디가드,고등어,자객,아나콘다,레몬,마검사,케이크,햄찌,개살구,오징어,깍두기,떡볶이,학자,현자,소시지,오리너구리,요리사,새싹,자라,나무늘보,아르마딜로,꼬마,고슴도치,모험가,실력자,오이소박이,카멜레온,호랑이,지식인,알파카,샐러리,문지기,타조,로봇,개미핥기,티라미수,반딧불이,물오리,방향치,완두콩,꽃사슴,멍멍이,원숭이,도라지,용자,부자,불사신,골목대장,망아지,불가사리,길치,화석,아이돌,탐험가,청양고추,불도마뱀,단호박,막대사탕,훈련병,민들레,늑대,개구리,말년병장".split(',');

class Home extends React.Component{
    state = {
        isLoading: true
    };

    getNames = async() => {
        //console.log(wjqenData);
        
        this.setState({isLoading: false});
    }

    componentDidMount() {
        this.getNames();
    }

    render() {
        const { isLoading } = this.state;
        function generate(e) {
            e.preventDefault();
            var result = "";
            var i = Math.floor(Math.random() * wjqenData.length);
            var j = Math.floor(Math.random() * wjqalData.length);
            var cName = document.getElementById("CookieName");
            result = wjqenData[i] + " " + wjqalData[j];
            cName.innerHTML = result;
            cName.style.color = "#321b0a";
            cName.style.fontWeight = "600";
            cName.style.textAlign = "left";
            cName.style.paddingLeft = "30px";
            console.log("clicked");
        }

        return <section>
            {isLoading ? (
                <div>
                    <span>Loading..</span>
                </div>
            ) : (
                <div id = "nameContainer">
                    <div id="propTitle">나의 이름은?</div>
                    <div id="nameZone">
                        <div id="btnZone">
                            <button onClick={generate} id = "genBtn"><span></span></button>
                        </div>
                        <div id = "CookieName">이름을 입력하세요.</div>
                    </div>
                    <div id="propDetail">
                        최대 10자 이내로 작성해주세요.<br/>
                        1회 무료 변경이 가능하며 이후에는 크리스탈이 소모<br/>
                        됩니다.
                    </div>
                    <div id="OKzone">
                        <button id="btnOK"><span></span></button>
                    </div>
                    <div id="hand"></div>
                </div>
            )}
        </section>
    }
}

export default Home;