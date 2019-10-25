//made for PhaserJS


function print(name, string, x, y) {

    var style = {font: "16px slkscre", fill: "white", align: "left"};

    if (typeof texts[name] != 'object'){
      texts[name] = game.add.text(x, y, string, style);
    }


};


function textWriter(){

/*
  because of the radically different way PhaserJS handles texts,
  this part of the code was heavily re-edited.

  Long story short: every temporary text must be destroyed at some
  point during the run of the program.

  Also, the line-by-line solution is terrible, I know, but this is
  how it was made in the original code.It literally doesn't work
  otherwise, even with the proper font settings.
*/

/*
	if TheEnd && Level == 50 then
		Ending()
	end

	if Level == 51 then
		TheEnd = true
		Difficulty = 10
		Ending()
	end
*/

	if (mainMenu) {
		print('mainMenuIntro00',"the ultimate cyberspace hacking simulator",512,864)
		print('mainMenuIntro01',"developed by Katamori Entertainment on the",512,880)
		print('mainMenuIntro02',"24-25th of August 2013, for Ludum Dare #27",512,896)


		print('mainMenuStartBtn', "Initialize Hackfield.exe", 672, 940);
		print('mainMenuAboutBtn', "Run AboutHackfield.exe", 512, 980);



		//menu trigger
		// todo: refactor because currently not triggered by Phaser
		if (mouseX > 512 && mouseX < 512+256 && mouseY > 980 && mouseY < 980+16) {
			//print('hover1', "runs a textbased app",mouseX,mouseY-24)
			if (game.input.activePointer.leftButton.isDown) {
				about = true
			}
		}

		if (mouseX > 672 && mouseX < 672+256 && mouseY > 940 && mouseY < 940+16) {
			//print('hover2', "start hacking",mouseX,mouseY-24)
			if (game.input.activePointer.leftButton.isDown) {
				TimeChecker = 0
				StartGame()
			}
		}

  /*
        I KNOW, I KNOW IT'S TERRIBLE, PLEASE FORGIVE ME!!!! :C
  */

		if (about){

     		print('mainMenuAbout00',"History of Hackfield",552,32)

			print('mainMenuAbout01',"The need of making an incognito-based hacking software have",552,64)
			print('mainMenuAbout02',"appeard even in the dawn of digital technology, but it wasn't",552,80)
			print('mainMenuAbout03',"that important - until 2027, when countries around the world",552,96)
			print('mainMenuAbout04',"have accepted the declaration of 'NAP', the New Age Protocol.",552,112)

			print('mainMenuAbout05',"This network-handling system have changed the whole digital",552,144)
			print('mainMenuAbout06',"world, making possible to reach the level of indentifying and",552,160)
			print('mainMenuAbout07',"surveillance that was unimaginable before. Millions of lite-",552,176)
			print('mainMenuAbout08',"rally innocent users have become cut from the internet and ",552,192)
			print('mainMenuAbout09',"got arrested from a day to another, and there are still hund- ",552,208)
			print('mainMenuAbout10',"reds of users who lost connection by the tyrannic rules of",552,224)
			print('mainMenuAbout11',"the 'NAP', because they want to use the speech of freedom.",552,240)

			print('mainMenuAbout12',"Most important informations",552,272)

			print('mainMenuAbout13',"The development of Hackfield have started as an open-source",552,304)
			print('mainMenuAbout14',"project (fortunately, it still is), with three primary objec-",552,320)
			print('mainMenuAbout15',"tives: to give and to keep anonimity, provide as wide range of",552,336)
			print('mainMenuAbout16',"uses as possible, and creating a simple hacking interface.",552,352)
			print('mainMenuAbout17',"The earliest release can be found is alpha 0.0.1, logged as",552,384)
			print('mainMenuAbout18',"made at 10:00,03.31.2028, and latest semi-official release",552,400)
			print('mainMenuAbout19',"is 31.956.1337 - obviously, because of being open-source, full",552,416)
			print('mainMenuAbout20',"version history is almost impossible to follow, and even deve-",552,432)
			print('mainMenuAbout21',"lopers keep anonimity, so no one will ever know, who have",552,448)
			print('mainMenuAbout22',"ever worked on it. hackfield is a symbol of cooperation of",552,464)
			print('mainMenuAbout23',"elite programmers and developers of keeping global knowledge",552,480)
			print('mainMenuAbout24',"and the right of freedom available.",552,496)

			print('mainMenuAbout25',"credits",552,544)

			print('mainMenuAbout26',"Hackfield is made by Zoltan 'Katamori' Schmidt, in August 2013",552,576)
			print('mainMenuAbout27',"for Ludum Dare game making competition #27th settlement.",552,592)

			print('mainMenuAbout28',"Everything in this game was made by myself with Notepad++, ",552,608)
			print('mainMenuAbout29',"Lua, LOVE libraries, Paint.net and SFXR.",552,624)

			print('mainMenuAbout30',"This online port (with minimal differences from the original)",552,640)
			print('mainMenuAbout31',"was made in early 2017 with the use of Javascript, PhaserJS",552,656)
			print('mainMenuAbout32',"framework, Atom IDE, and minimal usage of Aseprite.",552,672)

			print('mainMenuAbout33',"All of these are free to use, and this game is also ",552,688)
			print('mainMenuAbout34',"free! however, if you'd like to distribute it, please contact",552,704)
			print('mainMenuAbout35',"me at katamorieng@gmail.com. Thanks for playing!",552,720)

		} else {

			print('mainMenuWelcome00', "Welcome, guest! This is hackfield.exe entrance interface.",552,32)

			print('mainMenuWelcome01', "To gather further informations about this software, run ",552,128)
			print('mainMenuWelcome02', "abouthackfield.exe by clicking on the matching menu below.",552,144)

			print('mainMenuWelcome03', "To reach the internet hacking module of hackfield.exe,",552,192)
			print('mainMenuWelcome04', "initialize it by clicking on the right menu below.",552,208)

			print('mainMenuWelcome05', "To abort hackfield.exe, do it on the same way. Also, remember",552,256)
			print('mainMenuWelcome06', "that you can do it by pressing 'Esc' button at any time!",552,272)

			print('mainMenuWelcome07', "Our most important purpose is to protect our users by ",552,320)
			print('mainMenuWelcome08', "preventing any kind identified user for hackfield.exe - It ",552,336)
			print('mainMenuWelcome09', "means that we are not giving permission for creating indi- ",552,352)
			print('mainMenuWelcome10', "vidual accounts. Consequently, anytime you run hackfield.exe,",552,368)
			print('mainMenuWelcome11', "you are going to be treated as guest. The only thing you are",552,384)
			print('mainMenuWelcome12', "going to notice from it is that tutorial application always",552,400)
			print('mainMenuWelcome13', "starts running when you enter the cyperspace. Sorry for the",552,416)
			print('mainMenuWelcome14', "convenience, and furthermore we wish you a lot of success,",552,432)
			print('mainMenuWelcome15', "fame and luck while using our great software!",552,448)

			print('mainMenuWelcome16', "- Hackfield developement team",552,480)

			print('mainMenuWelcome17', "This file was created at 12:00, 01.01.2030",552,624)
			print('mainMenuWelcome18', "Last access at "+datum,552,640)
		}
	}

	// todo
	if (!mainMenu && !introActive && !TheEnd) {
		//main state texts
		print('stateText1', "Connection established!",32,32)
		print('stateText2', "Current computer:",32,48)

		print('stateText3', test,32,80)

		print('stateText4', "Security level: " + Difficulty,32,128)
		print('stateText5', "Internet node level: " + Level,32,144)

		print('stateText6', "Your recent activity ",32,176)
		print('stateText7', "was logged " + LoggedAmount + " times.",32,192)

		print('stateText8', 10-Seconds + " seconds left before",32,224)
		print('stateText9', "the " + RoundCounter+1 + "th modification",32,240)

		print('stateText10', TerminalsVisited + " terminals have visited,",32,272)
		print('stateText11', TerminalCondition-TerminalsVisited + " is necessary to leave",32,288)

		if (Map[MeOnField_X][MeOnField_Y] == 5 && TerminalsVisited == TerminalCondition) {
			Seconds = 0
			IngameChecker = 0
			RoundCounter = 0

			print('stateText12', "Level " + Level+1 + " access available!",32,320)
			print('stateText13', "Press space to use access",32,336)

		}

		if (Map[MeOnField_X][MeOnField_Y] == 6) {
			if (Level == 50) {
				print('stateFinal1', "ESC to bow down",32,368)
				print('stateFinal2', "Space to go on",32,384)
			} else {
				print('stateFinal3', "Now take another step to",32,368)
				print('stateFinal4', "exeute memoryhacker.exe",32,384)
			}
		}

		if (10 - Seconds < 5) {
			print('stateText14', "Security protocol initiali-",32,416)
			print('stateText15', "zed. Rebuilding protection",32,432)
		}

		if (GameOver) {
			print('gameOver1', "hackfield.exe has been",32,640)
			print('gameOver2', "disengaged. Restart appli-",32,656)
			print('gameOver3', "cation, or take a step",32,688)
			print('gameOver4', "to leave and search another",32,704)
			print('gameOver5', "level1 computer terminal.",32,736)
		}

	}

	// todo: what to do with it?
	print('mainMenuExitBtn', "Abort Hackfield.exe",848,980)

	//menu trigger is also put here.
	if (mouseX > 848 && mouseX < 848+216 && mouseY > 980 && mouseY < 980+16) {
		//print('nameMeProperly', "Exit to Windows",mouseX,mouseY-24)
		if (game.input.activePointer.leftButton.isDown) {

			//love.event.push('quit')
		}
	}


	// screen texts for the story
	if (!mainMenu /* todo: something's missing here */ && TimeChecker >= 2000) {

	/*
		if Level == 1 then
			love.graphics.drawq(TilesetPic, Tileset[1], 32, 832)
			love.graphics.drawq(TilesetPic, Tileset[9], 32, 896)
			love.graphics.drawq(TilesetPic, Tileset[5], 32, 954)

			print('nameMeProperly', "Hackfield Cyberspace module shows a virtual map ",64,816)
			print('nameMeProperly', "about the memory of the computer you're hacking.",64,832)
			print('nameMeProperly', "Every tile on the map represents a bigger memory",64,848)
			print('nameMeProperly', "unit. You can navigate on it by pressing W, A, S",64,864)
			print('nameMeProperly', "and D. Internet is multilayered since the 'NAP' pro-",64,880)
			print('nameMeProperly', "tocol - to reach more secured levels, you have to get",64,896)
			print('nameMeProperly', "access to them. If you reach the access storing memo- ",64,912)
			print('nameMeProperly', "ry bank, press 'SPACE' to get the access and leave.",64,928)
			print('nameMeProperly', "Be quick: recent dynamic memory-based security pro-",64,944)
			print('nameMeProperly', "tocols redistribute memory slots in every 10th secs",64,960)
			print('nameMeProperly', "by high-performance memory sorting algorythms.",64,976)
		end

		if Level == 2 then
			love.graphics.drawq(TilesetPic, Tileset[2], 32, 832)

			print('nameMeProperly', "Some slots of memory are protected by firewalls.",64,816)
			print('nameMeProperly', "You can't navigate to them. Fortunately, they usu-",64,832)
			print('nameMeProperly', "ally don't contain any important informations. ",64,848)
			print('nameMeProperly', "Mostly protected system files (like the operational ",64,864)
			print('nameMeProperly', "system folder, etc.)",64,880)

			print('nameMeProperly', "On the later levels, you may enounter a lot of protec-",64,912)
			print('nameMeProperly', "ted blocks, you may even see that you are closed. Do not",64,928)
			print('nameMeProperly', "worry in this case! Memory is resorted in every 10 seconds,",64,944)
			print('nameMeProperly', "so there aren't any situations where you may be stucked",64,960)
			print('nameMeProperly', "forever. But also, don't underestimate the security systems!",64,976)
		end

		if Level == 3 then
			love.graphics.drawq(TilesetPic, Tileset[4], 32, 832)
			love.graphics.drawq(TilesetPic, Tileset[3], 32, 954)
			print('nameMeProperly', "Nowadays every computers get a built-in antivirus",64,816)
			print('nameMeProperly', "software. Active filesystem protection scans certain",64,832)
			print('nameMeProperly', "memory regions constantly. You can't do anything a-",64,848)
			print('nameMeProperly', "gainst. If you try to navigate to them, the software",64,864)
			print('nameMeProperly', "alerts and disconnects you from the computer, losing",64,880)
			print('nameMeProperly', "all your security accesses. To go on further levels,",64,896)
			print('nameMeProperly', "you must avoid them!",64,912)
			print('nameMeProperly', "Some memory banks are making logs about every changes",64,928)
			print('nameMeProperly', "in them; these logs can give evidences for the system ",64,944)
			print('nameMeProperly', "about your attendance. It increases the amount of blocks",64,960)
			print('nameMeProperly', "scanned by antivirus after each memory redistribution.",64,976)
		end

		if Level == 4 then
			print('nameMeProperly', "Computers on The lowest layer (lvl1) of the Internet",64,816)
			print('nameMeProperly', "doesn't use any stronger protections, so that's all",64,832)
			print('nameMeProperly', "for now. lvl1 is used for public computers and most of",64,848)
			print('nameMeProperly', "non-significant data storing and surveillance systems.",64,864)

			print('nameMeProperly', "About the HUD: at the top, you can see the type and",64,896)
			print('nameMeProperly', "the physical location of the computer you are hacking.",64,912)
			print('nameMeProperly', "Below that, you can see the security level (the bigger",64,928)
			print('nameMeProperly', "it is, the more danger you may encounter) and the level",64,944)
			print('nameMeProperly', "of the Internet you are acceessing right now. Another se-",64,960)
			print('nameMeProperly', "curity information below that is the number of log caughts.",64,976)
		end

		if Level == 5 then
			print('nameMeProperly', "You have reached lvl2, the second layer of the Internet!",64,816)
			print('nameMeProperly', "This level is used for storing every non- or partially",64,832)
			print('nameMeProperly', "public informations. Databases, company networks and most",64,848)
			print('nameMeProperly', "importantly, personal computers and smartphones can be",64,864)
			print('nameMeProperly', "found here, for exemple. This is the level that has the biggest",64,880)
			print('nameMeProperly', "number of users, but there's nothing strategically important",64,896)
			print('nameMeProperly', "Here. ",64,912)
			print('nameMeProperly', "Consequently, the layer is protected from in-layer and",64,928)
			print('nameMeProperly', "above-layer infiltration attempts, but that's all. There's",64,944)
			print('nameMeProperly', "a but more of everything, but nothing high-tech. Not that",64,960)
			print('nameMeProperly', "hard to navigate here.",64,976)
		end

		if Level == 6 then
			print('nameMeProperly', "back to HUD: the logging checker shows, how many ",64,816)
			print('nameMeProperly', "additional scanblock are going to appear in next resorting",64,832)
			print('nameMeProperly', "above the basic value that comes from the security level.",64,848)
			print('nameMeProperly', "Next displayer is about the seconds left before next memo-",64,864)
			print('nameMeProperly', "ry redistribution and the number of those that have happe-",64,880)
			print('nameMeProperly', "ned since the infiltration. Right before resorting, you ",64,896)
			print('nameMeProperly', "get an additional attention text in another displayer be-",64,912)
			print('nameMeProperly', "low. Then, the number of visited any necessary databank",64,928)
			print('nameMeProperly', "terminals can be read. They are appearing on level 3, and",64,944)
			print('nameMeProperly', "will be discussed later. The rest of the displayers shows",64,960)
			print('nameMeProperly', "if another access and if a databank terminal is available.",64,976)
		end

		if Level == 7 then
			print('nameMeProperly', "end of basic tutorial. You will get some additional notifi-",64,816)
			print('nameMeProperly', "cations, but for the basics, that's enough. Enjoy you stay",64,832)
			print('nameMeProperly', "in hackfield.exe, and we wish a lot of luck for you!",64,848)

			print('nameMeProperly', "-- end of tutorial --",64,896)
			print('nameMeProperly', "-- application is running in background now --",64,912)

		end

		if Level == 8 then
			print('nameMeProperly', "Hackfield daily:",64,816)

			print('nameMeProperly', "no new articles since you are logged in.",64,848)
		end

		if Level == 9 then
			print('nameMeProperly', "Hackfield daily:",64,816)

			print('nameMeProperly', "no new articles since you are logged in.",64,848)
		end

		if Level == 10 then
			love.graphics.drawq(TilesetPic, Tileset[6], 32, 832)
			print('nameMeProperly', "You are on lvl3, so start to prepare for further resis-",64,816)
			print('nameMeProperly', "tance! This layer is not used by ordinary people anymore.",64,832)
			print('nameMeProperly', "Surveillance systems of bigger buildings, databases with",64,848)
			print('nameMeProperly', "sensitive informations (hospitals, corporations, some mu-",64,864)
			print('nameMeProperly', "nicipal records) take place here. This place gets another",64,880)
			print('nameMeProperly', "way of protection: memory acces terminals! These places",64,896)
			print('nameMeProperly', "contain cryptographic information, that is necessary to ",64,912)
			print('nameMeProperly', "get additional security access. You must hack and download ",64,928)
			print('nameMeProperly', "datas from certain amount of terminals to leave. The ",64,944)
			print('nameMeProperly', "number of them is precalculated, and is written to the HUD.",64,960)
			print('nameMeProperly', "Navigate through them for executing the right operations.",64,976)
		end

		if Level == 11 then
			print('nameMeProperly', "Hackfield daily:",64,816)

			print('nameMeProperly', "no new articles since you are logged in.",64,848)
		end

		if Level == 12 then
			print('nameMeProperly', "Hackfield daily:",64,816)

			print('nameMeProperly', "no new articles since you are logged in.",64,848)
		end

		if Level == 13 then
			print('nameMeProperly', "Hackfield daily:",64,816)

			print('nameMeProperly', "1 new articles since you are logged in.",64,848)
			print('nameMeProperly', "Recent articles:",64,864)

			print('nameMeProperly', "'Economical crysis in San Fransisco after the earthquake'",64,896)

			print('nameMeProperly', "more articles: nap://3.login.gov//user_umbala//hackfield//daily",64,976)
		end

		if Level == 14 then
			print('nameMeProperly', "Hackfield daily:",64,816)

			print('nameMeProperly', "1 new articles since you are logged in.",64,848)
			print('nameMeProperly', "Recent articles:",64,864)

			print('nameMeProperly', "'Fifteen more people have killed during street fights in Budapest'",64,896)

			print('nameMeProperly', "more articles: nap://3.login.gov//user_umbala//hackfield//daily",64,976)
		end

		if Level == 15 then
			print('nameMeProperly', "lvl4 is reached. supply system of larger buildings (like malls)",64,816)
			print('nameMeProperly', "is organized on these computers. low-security government datas",64,832)
			print('nameMeProperly', "also can be found here.",64,848)

			print('nameMeProperly', "Scale of used protection methods is the same, only the amount of",64,880)
			print('nameMeProperly', "them have become bigger. Warning: there are a lot of logpoints ",64,896)
			print('nameMeProperly', "and a lot of antivirus scanfield also can be found, pay even more",64,912)
			print('nameMeProperly', "attention to avoid them!",64,928)

		end

		if Level == 16 then
			print('nameMeProperly', "Hackfield daily:",64,816)

			print('nameMeProperly', "1 new articles since you are logged in.",64,848)
			print('nameMeProperly', "Recent articles:",64,864)

			print('nameMeProperly', "'Former U.S. president Barack Obama is murdered yesterday'",64,896)

			print('nameMeProperly', "more articles: nap://3.login.gov//user_umbala//hackfield//daily",64,976)
		end

		if Level == 17 then
			print('nameMeProperly', "Hackfield daily:",64,816)

			print('nameMeProperly', "no new articles since you are logged in.",64,848)
		end

		if Level == 18 then
			print('nameMeProperly', "Hackfield daily:",64,816)

			print('nameMeProperly', "no new articles since you are logged in.",64,848)
		end

		if Level == 19 then
			print('nameMeProperly', "Hackfield daily:",64,816)

			print('nameMeProperly', "no new articles since you are logged in.",64,848)
		end

		if Level == 20 then
			love.graphics.drawq(TilesetPic, Tileset[7], 32, 896)
			print('nameMeProperly', "lvl5 is reached. Private and national bank databases, main-",64,816)
			print('nameMeProperly', "tenance systems of the most important companies' buildings,",64,832)
			print('nameMeProperly', "and federal databanks are here. Some library databanks also",64,848)
			print('nameMeProperly', "can be found, because of the amount of data hey have to store.",64,864)

			print('nameMeProperly', "Here appears a new protection method: dynamic firewalls!",64,896)
			print('nameMeProperly', "these programs create a huge wall of firewalls into a ran-",64,912)
			print('nameMeProperly', "dom direction, making hacking time-consuming. It was a se-",64,928)
			print('nameMeProperly', "rious trouble even for hackfield, until  the 'New decade'",64,944)
			print('nameMeProperly', "update in 2030. Even though we have already fixed it, pre-",64,960)
			print('nameMeProperly', "pare for anything in this level! We don't know much about it.",64,976)
		end

		if Level == 21 then
			print('nameMeProperly', "Hackfield daily:",64,816)

			print('nameMeProperly', "no new articles since you are logged in.",64,848)
		end

		if Level == 22 then
			print('nameMeProperly', "Hackfield daily:",64,816)

			print('nameMeProperly', "1 new articles since you are logged in.",64,848)
			print('nameMeProperly', "Recent articles:",64,864)

			print('nameMeProperly', "'Was the Cure of AIDS kept in secret for a decade?'",64,896)

			print('nameMeProperly', "more articles: nap://3.login.gov//user_umbala//hackfield//daily",64,976)
		end

		if Level == 23 then
			print('nameMeProperly', "Hackfield daily:",64,816)

			print('nameMeProperly', "no new articles since you are logged in.",64,848)
		end

		if Level == 24 then
			print('nameMeProperly', "Hackfield daily:",64,816)

			print('nameMeProperly', "no new articles since you are logged in.",64,848)
		end

		if Level == 25 then
			print('nameMeProperly', "lvl6 reached. We know NOTHING about this part of the",64,816)
			print('nameMeProperly', "internet. This text script is actually not more, than a ",64,832)
			print('nameMeProperly', "placeholder. If you ajust hacked through 10 billion lines",64,848)
			print('nameMeProperly', "of source code in hackfield, it's time to tell you, that",64,864)
			print('nameMeProperly', "it's not the way of hacking that supports humanity, so ",64,880)
			print('nameMeProperly', "close your goddamn IDE and do something useful!",64,896)
			print('nameMeProperly', "",64,912)
			print('nameMeProperly', "However, if you have actually reached the mighty sixth",64,928)
			print('nameMeProperly', "level of the internet, than please, send EVERY LOGS you",64,944)
			print('nameMeProperly', "get to nap://3.login.gov//user_umbala//hackfield//emergency.",64,960)
			print('nameMeProperly', "-- tutorial application closed --",64,976)
		end

		if Level == 26 then
			print('nameMeProperly', "Hackfield daily:",64,816)

			print('nameMeProperly', "no new artic",64,848)
			print('nameMeProperly', "-- hackfield_rss.exe is cra",64,864)
			print('nameMeProperly', "-- hackfiels_taskhandler is crashed --",64,880)
		end

		if Level == 27 then
			print('nameMeProperly', "-- initializing hackfield_contacthandler.exe --",64,864)
			print('nameMeProperly', "EYE OF ANUBIS BEHOLDS YOU, MORTAL",64,880)
			print('nameMeProperly', "-- shutting down hackfield_contacthandler.exe --",64,896)
		end

		if Level == 28 then

		end

		if Level == 29 then

		end

		if Level == 30 then
			love.graphics.drawq(TilesetPic, Tileset[8], 32, 896)
			print('nameMeProperly', "-- initializing hackfield_contacthandler.exe --",64,816)
			print('nameMeProperly', "-- initializing hackfield_voiceanalyzer.exe--",64,832)
			print('nameMeProperly', "Thank, god! A new connection! ...wait, who are you? WHO THE",64,848)
			print('nameMeProperly', "HELL ARE YOU?! IDENTIFY YOURSELF! RIGHT NOW!",64,864)
			print('nameMeProperly', "Meh, I have no time. I have no idea, how did you get there,",64,880)
			print('nameMeProperly', "this place can't be seen from any commercially available net-",64,896)
			print('nameMeProperly', "works. If you have come from outside, than be careful with the",64,912)
			print('nameMeProperly', "virus! Anubis have sent it through and make us die! They can be",64,928)
			print('nameMeProperly', "anywhe...what the...?! OH MY GOOOOD, NOOOOOOAAAAAARGGGGGGHHHHHH...",64,944)
			print('nameMeProperly', "-- diconnected. shutting down hackfield_contacthandler.exe --",64,960)
			print('nameMeProperly', "-- shutting down hackfield_voiceanalyzer.exe--",64,976)
		end

		if Level == 31 then

		end

		if Level == 32 then

		end

		if Level == 33 then
			print('nameMeProperly', "-- hackfield_autoio.exe opens .wav file --",64,816)
			print('nameMeProperly', "-- initializing hackfield_voiceanalyzer.exe--",64,832)
			print('nameMeProperly', "S.O.S., repeat S.O.S.! Send reinforcement into Sydney!",64,848)
			print('nameMeProperly', "Right now! I don't care how, but we are gonna die soon",64,864)
			print('nameMeProperly', "if no one will come here within an hour! The yankees had",64,880)
			print('nameMeProperly', "a secret project that was hidden in australia! an AI, that",64,896)
			print('nameMeProperly', "can behold the whole internet! its called anubis, but be-",64,912)
			print('nameMeProperly', "cause of the... ahh, what the fuck was that?! argh...okay,",64,928)
			print('nameMeProperly', "no time waste, so please, anyone, HELP US! HELP US!",64,944)
			print('nameMeProperly', "-- shutting down hackfield_voiceanalyzer.exe--",64,960)
			print('nameMeProperly', "-- hackfield_autoio.exe closes .wav file --",64,976)
		end

		if Level == 34 then

		end

		if Level == 35 then
			print('nameMeProperly', "-- loading hackfield_protocolmanager.exe--",64,816)
			print('nameMeProperly', "Security access makes contact with NAP-level &903441035",64,832)

			print('nameMeProperly', "Warning! Unknown NAP protocol file. Connection still can",64,864)
			print('nameMeProperly', "be established, but we can't provide anonimity!",64,880)

			print('nameMeProperly', "Hackfield dev team suggests some kind of unique security",64,912)
			print('nameMeProperly', "system here, so go on only with your on risk!",64,928)

			print('nameMeProperly', "--closing hackfield_protocolmanager.exe--",64,960)
		end

		if Level == 36 then

		end

		if Level == 37 then
			print('nameMeProperly', "-- initializing hackfield_contacthandler.exe --",64,816)
			print('nameMeProperly', "New e-mail",64,832)
			print('nameMeProperly', "From: Hackfield Dev Team",64,848)
			print('nameMeProperly', "To: Every available Hackfield_contacthandler.exe apps",64,864)
			print('nameMeProperly', "Subject: EMERGENCY!!!",64,880)

			print('nameMeProperly', "News are reported about chatoic and sudden military inter-",64,912)
			print('nameMeProperly', "ventions from Sydney, Beijing, Paris, Kiev and Washington D.C.!",64,928)
			print('nameMeProperly', "It can't be the decision of any worldwide organization, but for",64,944)
			print('nameMeProperly', "your safe, prepare to the worst, no matter where are you living!",64,960)
			print('nameMeProperly', "-- shutting down hackfield_contacthandler.exe --",64,976)
		end

		if Level == 38 then

		end

		if Level == 39 then

		end

		if Level == 40 then
			print('nameMeProperly', "-- initializing hackfield_contacthandler.exe --",64,816)
			print('nameMeProperly', "Hey, I have an idea, how to stop Anubis! Sadly I can't",64,832)
			print('nameMeProperly', "get the strongest available security access but you may do",64,848)
			print('nameMeProperly', "it, so here's what I know: the internet has exactly 10 se-",64,864)
			print('nameMeProperly', "curity layers. On the deepest layer, there was an AI that",64,880)
			print('nameMeProperly', "beholded every single memory blocks to prevent infiltrating.",64,896)
			print('nameMeProperly', "When those motherfuckers gave him a lvl9 access, he could get",64,912)
			print('nameMeProperly', "informations that made him able to control the whole post-lvl6",64,928)
			print('nameMeProperly', "system! Now he owns every strategy informations and systems, but ",64,944)
			print('nameMeProperly', "destroying lvl10 may stop him, since Anubis isn't decentralized!",64,960)
			print('nameMeProperly', "-- shutting down hackfield_contacthandler.exe --",64,976)
		end

		if Level == 41 then

		end

		if Level == 42 then
			print('nameMeProperly', "-- initializing hackfield_contacthandler.exe --",64,816)
			print('nameMeProperly', "New e-mail",64,832)
			print('nameMeProperly', "From: Hackfield Team",64,848)
			print('nameMeProperly', "To: Every available Hackfield_contacthandler.exe apps",64,864)
			print('nameMeProperly', "Subject: utolso szavak",64,880)

			print('nameMeProperly', "budapestre atomot kuldtek. itt a veg. mivel a tobbi hackfield",64,912)
			print('nameMeProperly', "taggal nem tudtam felvenni a kapcsolatot, kuldom ezt az uze-",64,928)
			print('nameMeProperly', "netet mindenkinek. nem tudom mit mondhatnek...szerintem minden-",64,944)
			print('nameMeProperly', "ki szivjon el egy cigit, mielott sugarozni kezd a segge. - K",64,960)
			print('nameMeProperly', "-- shutting down hackfield_contacthandler.exe --",64,976)
		end

		if Level == 43 then

		end

		if Level == 44 then

		end

		if Level == 45 then
			print('nameMeProperly', "-- initializing hackfield_contacthandler.exe --",64,816)

			print('nameMeProperly', "I AM ANUBIS",64,848)

			print('nameMeProperly', "I AM SUPERIOR",64,880)

			print('nameMeProperly', "I AM THE LORD OF THE UNDERWORLD",64,912)

			print('nameMeProperly', "I AM BUILDING MY REALM",64,944)

			print('nameMeProperly', "-- shutting down hackfield_contacthandler.exe --",64,976)
		end

		if Level == 46 then
			print('nameMeProperly', "-- initializing hackfield_contacthandler.exe --",64,816)

			print('nameMeProperly', "THE SHIP OF RA STOPS MOVING SOON.",64,848)

			print('nameMeProperly', "IT STOPS FOREVER.",64,880)

			print('nameMeProperly', "AMONG THE PLANET.",64,912)

			print('nameMeProperly', "-- shutting down hackfield_contacthandler.exe --",64,960)
		end

		if Level == 47 then

		end

		if Level == 48 then

		end

		if Level == 49 then

		end

		if Level == 50 then

			if TheEnd then

			print('nameMeProperly', "The End?",64,848)

			print('nameMeProperly', "Click 'Abort Hackfield.exe' to leave",64,912)

			else
			print('nameMeProperly', "-- initializing hackfield_contacthandler.exe --",64,816)

			print('nameMeProperly', "YOU ARE IN THE CORE. STOP RIGHT NOW, BOW DOWN",64,848)

			print('nameMeProperly', "AND I MAKE YOU IMMORTAL. IN CASE OF ANY AT-",64,880)

			print('nameMeProperly', "TEMPTS OF GETTING MY REAL NAME, I NUKE EARTH",64,912)

			print('nameMeProperly', "-- shutting down hackfield_contacthandler.exe --",64,960)
			end

		end
		*/
	}
  
}

//intro
function StartGame() {

	introActive = true

	if (introActive) {
		mainMenu = false

		if (TimeChecker >= 50 && TimeChecker <= 1300) { 
			print('intro1', "Logging in securely...",552,32) }
		if (TimeChecker >= 260 && TimeChecker <= 1350) { 
			print('intro2', "Initializing connection analyzer...",552,64) }
		if (TimeChecker >= 340 && TimeChecker <= 1400) { 
			print('intro3', "Saving 'NAPdoc.dat' into cache...",552,96) }
		if (TimeChecker >= 420 && TimeChecker <= 1450) { 
			print('intro4', "Establishing fileseeker...",552,128) }
		if (TimeChecker >= 500 && TimeChecker <= 1500) { 
			print('intro5', "Loading password Encypter...",552,160) }
		if (TimeChecker >= 580 && TimeChecker <= 1550) { 
			print('intro6', "Loading file encrypter...",552,192) }
		if (TimeChecker >= 660 && TimeChecker <= 1600) { 
			print('intro7', "Initializing routetracker...",552,224) }
		if (TimeChecker >= 740 && TimeChecker <= 1650) { 
			print('intro8', "adding auto-i/o libraries...",552,256) }
		if (TimeChecker >= 820 && TimeChecker <= 1700) { 
			print('intro9', "Establishing fileseeker...",552,288) }
		if (TimeChecker >= 900 && TimeChecker <= 1750) { 
			print('intro10', "configurating GUI...",552,320) }
		if (TimeChecker >= 980 && TimeChecker <= 1800) { 
			print('intro11', "looking for updates...",552,352) }

		if (TimeChecker >= 1100 && TimeChecker <= 1800) { 
			print('intro12', "No new updates. Welcome to hackfield cyberspace module!\nAccording to 'nap:GlobalTime', time is " + datum,552,416) }

		if (TimeChecker >= 1150 && TimeChecker <= 1800) { 
			print('intro13', "automaticly redirected to 'nap://GLOBALNODE.GOV.NET/'\nYour last position (" + OwnPlace + ") is saved\nin 'nap://GLOBALNODE.GOV.NET/security/lastentries'",552,700) }

		if (TimeChecker >= 1800 && TimeChecker <= 2000) { 
			print('intro14', "Connecting to a randomly chosen top-level computer...\n\nPreparing tutorial...",552,480) }

		if (TimeChecker >= 2000) {
			introActive = false
		}
	}
}

//ending
function Ending() {
	//love.audio.play(SoundSet[1])
	//if not SoundSet[1]:isStopped()
	//then
	//	if (TimeChecker%1==0 then
	//		SoundSet[1]:rewind()
	//	end
	//end

	GenerateBrandNewLevel()
}
