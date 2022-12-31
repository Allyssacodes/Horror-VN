let chapter1 = document.querySelector('#p').innerText
let chapter2 = "In the nightmare, you were in your childhood home. You wander around looking for your family, but you can't find them anywhere. As you keep looking, thingsbegin to feel off. You could swear this hallway didn't use to have this many doors. You try to look into them, but it's almost as if your brain fails-or refuses-to process what it's looking at, and you see nothing. The absence ofsight. As you continue down the hallway, the space in front of you only seemsto get longer somehow. Something's very wrong. A split second later, a large,mangled hand shoots up out of the ground in front of you. It grabs hold of your arm, which begins rotting and bubbling with blood and puss. You scream, and try to run, but can't seem to make it anywhere in this hallway. In desperation, you jump into one of the rooms. Sight and sound are a distant memory in this hellish limbo. Mere concepts with no meaning here. You reach totouch your face, only to feel your arm bend away from you, snapping it's ownbones in an effort to avoid contact with the rest of you. You're unable toscream. You're tormented with ten thousand hells for every unbearable momentin this incomprehensible space which seemed to reject all understanding. It's as if your brain refuses to tolerate this place, forcing itself to shut down as you fall to the floor dead."
let chapter3 = "You sob and sweat as you force yourself to recount the experience. It's as if thinking about it makes your brain burn. You transfix on every detail, the dread of that awful hallway, the grotesque image of that horriblely mutilated arm, the feeling of having your arm rot of your body...God, the awful pain...Your sobbing continues until you finally jot down the last of it. You stand, dizzy, and make your way to the shower. With every one of these terrible dreams, it becomes harder to feel clean. You sometimes feel as if you're mutating along with your increasingly unsound mind. As you shower, you can't contain your disgust any longer. You feel as though your body swells and contracts, every hair, every finger and toenail, every cell is becoming unbearable to you. You vomit on the floor of the shower, briefly falling to your knees before slowly rising back up. You finish your shower, and get ready for work. You briefly consider calling in, but you can't risk this job. You need to keep up with your meds. God help you if this becomes worse. You head out the door, and drive off."
let chapter4 = "You're at your old church, standing in the empty parking lot. The doors and windows are boarded up, but you've come here to look for an old possession, an old coin given to you by your late father. You haven't been here in years. You manage to get inside, and begin looking. The place is coated in a layer of dust, with webs everywhere. You pull out your phone, and turn on it's flashlight. You decide to check the old church library first, since it's near the entrance.  It was always a small library. A few dozen books, with a few old VHS religious cartoons. An old wooden chest sits against the backwall of the room. You open it up, greeted by a handful of cockroaches scurrying away. You look at a few of the old books stored in the chest. Mostly run of the mill religious books. 'Explaining the old testament', 'Your walk with God', stuff like thhat. One stands out to you, though. 'A history of the practices and rituals of this church'. It's cover makes you uncomfortable. It's clearly an artist's depiction of a witch burning. You put the book in your jacket pocket, and leave the library to continue your search. You soon find your way to the church kitchen. Plastic plates and empty soda cans are strewn across the filthy floor. You lift up the table cloth, leaning down to look beneath the table. Suddenly, a group of rats jump out at you. The crawl around on you, biting you in a number of places before you finally manage to shake them off. One is flung hard against the wall, and falls down dead. Once the others are gone and you've mentally recovered somewhat, you take a closer look at the dead rat. It's clearly been losing fur for quite sometime, with it being fully bald in some places. It's larger than normal, maybe twice as big as a normal rat. It's eyes are a murky, whitish gray, clearly bloodshot as well. It's mouth contains the most fucked up set of teeth you've ever seen on a living animal broken, discolored. It's neck is bent out of shape from hitting the wall. You assume this is what killed it. Suddenly, it's neck snaps back into place. It stumbles to it's feet, looking you dead in the eyes and making the most awful hissing noise before scurrying away. You're now filled with terror, and quickly decide to leave the church. You run through the halls frantically, and dash through the front door, only to somehow find yourself in the old sanctuary. You turn around, but the door is gone. When you turn back, so are the windows. Blood begins to gush out of all the bibles in the pewws, and soon it's up to your ankles. You hear a faint heavenly chorus begin. Dozens and dozens of raats begin to burst from the walls and ceiling all swimming straight for you. You try your best to fight them off, but they overwhelm you and you fall to the ground. You can feel them chew on and rip through your skin. The chorus has grown louder, now joined by an unseen mob chanting 'Kill the witch!'. You manage to escape the rats, and stumble onto the stage, behind the podium. You desperately thumb through the book you grabbed earlier, looking for any info that might help you escape, as the chorus grows ever louder. It mostly seems to be about how the church has dealt with witches through history, hence the cover. You see artist renditions of witches burnt at the stake, drowned, stoned to death, and all manner of brutality. Suddenly, the pews are filled with a congregation. Each of them look as if they could be a thousand years old, decrepit and rotting. The wade through the blood, and begin to surround you, still chanting. 'Kill the witch! Kill the witch!' Two of them grab you, and they tie you down to a pew. One of them pulls out a knife, and cuts your stomach open. They begin reaching in and grabbing handfuls from insidde of you, shoving it in their mouths and laughingg. The chorus has become ear shattering. They place wood onn top of you, before lighting a match, and setting you on fire. You scream in horrible agony as they cheer. A few yell out 'Justice on the wicked!' as you slowly and painfully die."
let chapter5 = "Test"
let currChapter = 0
let chapters = [chapter1, chapter2, chapter3, chapter4, chapter5]
let canvasimg1 = document.getElementById('canvas-img1')
let ImagesArray = ["Image1.png", "Image2.png", "Image3.png", "Image4.png", "cuddle.jpg"]
let currImage = 0;

class ChapterAudio {
	constructor() {
		this.chapter1Audio = new Audio('./Chapter1.wav');
		this.chapter2Audio = new Audio('./Chapter2.wav');
		this.chapter3Audio = new Audio('./Chapter3.wav');
		this.chapter4Audio = new Audio('./Chapter4.wav');
	}
	update(currChapter) {
		switch (currChapter) {
			case 0:
			  this.chapter1Audio.play();
			break;
			case 1:
			  this.chapter2Audio.play();
			break;
			case 2:
			  this.chapter3Audio.play();
			break;
			case 3:
			  this.chapter4Audio.play();
		
		}
	}
}
const audioManager = new ChapterAudio()

function canvas2Display() { 
   canvasimg1.src = ImagesArray[currImage]
   ImagesArray = ["Image1.png", "Image2.png", "Image3.png", "Image4.png", "cuddle.jpg"]
}

document.querySelector('#next').addEventListener('click', () => {
  document.querySelector('#p').innerText = chapters[++currChapter];
  if(currChapter == 4) next.style.display = 'none'
  else next.style.display = 'inline';
  prev.style.display = 'inline'
  currImage++
  canvas2Display()
})

document.querySelector('#prev').addEventListener('click', () => {
  document.querySelector('#p').innerText = chapters[--currChapter]
  if(currChapter == 0) prev.style.display = 'none'
  else prev.style.display = 'inline'
  next.style.display = 'inline'
  currImage--
  canvas2Display()
})

document.querySelector('#play').addEventListener('click', () => {
  audioManager.update(currChapter)
})