const app = document.getElementById("app");
const logo = document.createElement("img");

logo.classList.add("logo");
logo.src =
	"https://vignette2.wikia.nocookie.net/ssb/images/f/f6/SF_Logo.png/revision/latest?cb=20150614010256";

app.appendChild(logo);

const characters = [
	{
		name: "Akuma",
		id: "akuma",
		imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/akuma.png",
	},
	{
		name: "Balrog",
		id: "balrog",
		imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/balrog.png",
	},
	{
		name: "M. Bison",
		id: "bison",
		imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/bison.png",
	},
	{
		name: "Blanka",
		id: "blanka",
		imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/blanka.png",
	},
	{
		name: "Cammy",
		id: "cammy",
		imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/cammy.png",
	},
	{
		name: "Chun Li",
		id: "chunli",
		imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/chunli.png",
	},
	{
		name: "Dhalsim",
		id: "dhalsim",
		imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/dhalsim.png",
	},
	{
		name: "E. Honda",
		id: "ehonda",
		imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/ehonda.png",
	},
	{
		name: "Evil Ryu",
		id: "evilryu",
		imgSrc:
			"https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/ryu.pnevilg.png",
	},
	{
		name: "Guile",
		id: "guile",
		imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/guile.png",
	},
	{
		name: "Ken",
		id: "ken",
		imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/ken.png",
	},
	{
		name: "Ryu",
		id: "ryu",
		imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/ryu.png",
	},
	{
		name: "Sagat",
		id: "sagat",
		imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/sagat.png",
	},
	{
		name: "T-Hawk",
		id: "thawk",
		imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/t-hawk.png",
	},
	{
		name: "Vega",
		id: "vega",
		imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/vega.png",
	},
	{
		name: "Zangief",
		id: "zangief",
		imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/zangief.png",
	},
];

const grid = document.createElement("div");
grid.classList.add("grid");
app.appendChild(grid);

characters.map((c, index) => {
	const character = document.createElement("div");
	character.classList.add("character");
	character.style.backgroundImage = `url(${c.imgSrc})`;
	const name = document.createElement("div");
	name.classList.add("name");
	name.classList.add("hidden");
	name.innerText = c.name;
	character.appendChild(name);
	character.id = c.id;
	character.addEventListener("click", (e, index) => {
		if (document.querySelector(".character.active")) {
			document.querySelector(".character.active").classList.remove("active");
			document.querySelector(".name:not(.hidden)").classList.add("hidden");
		}
		name.classList.remove("hidden");
		character.classList.add("active");
	});
	grid.appendChild(character);
});

let musicTheme = new Audio(
	"https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/02.%20Player%20Select.mp3"
);
musicTheme.play();
musicTheme.loop = true;
musicTheme.autoplay = true;
