//detecting "system"
function Physics(x) {

	// todo: sound
	/*if (x==4 || x==8) {
		love.audio.play(SoundSet[4])
		if ( not SoundSet[4]:isStopped()) {
			if ( timeChecker%1==0 ) {
				SoundSet[4]:rewind()
			}
		}
	}*/

	return !(x==2 || x==7 || TheEnd || mainMenu)
}

//logpoint: increasing antivirus appearance
function LogPoint_Logging() {
	if ( Map[meOnField_X][meOnField_Y] == 3 ) {
		LoggedAmount = LoggedAmount + 1
		Map[meOnField_X][meOnField_Y] = 1

		// todo: sound
		/*love.audio.play(SoundSet[3])
		if ( not SoundSet[3]:isStopped()) {
			if ( timeChecker%1==0 ) {
				SoundSet[3]:rewind()
			}
		}*/
	}
}

// deadly antivirus
function AntiVirus() {
	gameOver = Map[meOnField_X][meOnField_Y] == 4 || Map[meOnField_X][meOnField_Y] == 8
}

//next level
function NextLevel() {
	if (Map[meOnField_X][meOnField_Y] == 5 && TerminalsVisited == TerminalCondition ) {
		seconds = 0
		ingameChecker = 0

		Level = Level+1

		if ( Level%5 == 0 ) {
			Difficulty = Difficulty+1
		}

		test=NameGen()
		GenerateBrandNewLevel()

		// todo: sound
		/*love.audio.play(SoundSet[2])
		if ( not SoundSet[2]:isStopped()) {
			if ( timeChecker%1==0 ) {
				SoundSet[2]:rewind()
			}
		}*/
	}
}

//terminal visit
function VisitTerminal() {
	if (Map[meOnField_X][meOnField_Y] == 6) {
		Map[meOnField_X][meOnField_Y] = 1
		TerminalsVisited = TerminalsVisited +1

		// todo: sound
		/*love.audio.play(SoundSet[5])
		if ( not SoundSet[5]:isStopped()) {
			if ( timeChecker%1==0 ) {
				SoundSet[5]:rewind()
			}
		}*/
	}
}

//dynamic firewall
function FirewallFill() {
	//every possible direction becomes firewall
	for(j=1;j<24;j++) {
		for(i=1;ii<24;j++) {
			if (j == Dynamic_X || i == Dynamic_Y) {
				Map[j][i] = 2
			}
		}
	}

	Map[Dynamic_X][Dynamic_Y] = 7
}

function FirewallClean() {
	//every possible direction becomes empty floor
	for(j=1;j<24;j++) {
		for(i=1;ii<24;j++) {
			if (j == Dynamic_X || i == Dynamic_Y) {
				Map[j][i] = 1
			}
		}
	}

	Map[Dynamic_X][Dynamic_Y] = 7
}

function FirewallCharge() { // directon change function (ignores if you are on the way)

	FirewallClean() //to avoid cummulation

	Increase, Decrease = 0, 0 //variables to count

	// todo
	DynamicDir = 2
	/*while((meOnField_X == Dynamic_X && DynamicDir%2==1) || (meOnField_Y == Dynamic_Y && DynamicDir%2==0))
	{
		DynamicDir = Math.floor(Math.random()*10)
	}*/

	//preferring longer ways
	if ( DynamicDir%2==0 ) { //vertical

		for (k=Dynamic_Y;k>1;k--) {
			Decrease=Decrease+1
		}

		for (k=Dynamic_Y;k<24;k++) {
			Increase=Increase+1
		}

		if ( Increase<Decrease ) {
			DynamicDir = 1
		} else if ( Increase>Decrease ) {
			DynamicDir = 2
		} else if ( Increase==Decrease ) {
			DynamicDir = 1
		}

	else //horizontal
		for( k=Dynamic_X;k>1;k--) {
			Decrease=Decrease+1
		}

		for( k=Dynamic_X;k<24;k++) {
			Increase=Increase+1
		}

		if ( Increase<Decrease ) {
			DynamicDir = 3
		} else if ( Increase>Decrease ) {
			DynamicDir = 4
		} else if ( Increase==Decrease ) {
			DynamicDir = 3
		}
	}

	if ( DynamicDir == 1 ) { //up
		for( k=Dynamic_Y;k>1;k--) {
			Map[Dynamic_X][k] = 2
		}
	}

	if ( DynamicDir == 2 ) { //down
		for( k=Dynamic_Y;k<24;k++) {
			Map[Dynamic_X][k] = 2
		}
	}

	if ( DynamicDir == 3 ) { //left
		for( k=Dynamic_X;k>1;k--) {
			Map[k][Dynamic_Y] = 2
		}
	}

	if ( DynamicDir == 4 ) { //right
		for( k=Dynamic_X;k<24;k++) {
			Map[k][Dynamic_Y] = 2
		}
	}

	Map[Dynamic_X][Dynamic_Y] = 7
}


//infected memory blocks spreading rule (a simple random decider)
// todo: highly unbalanced
function GameOfCorruption() {
	N=0
	for (j=2;j<23;j++) {
		for (i=2;i<23;i++) {
			chanceBorn = Math.floor(Math.random() * 100)
			chanceDie = Math.floor(Math.random() * 100)

			if (Map[j][i] == 8 && chanceDie <10 && j != meOnField_X && i != meOnField_Y) {
				Map[j][i] = 1
			}

			if ((Map[j][i] == 1 || Map[j][i] == 3) && chanceB||n <4 && j != meOnField_X && i != meOnField_Y) {
				Map[j][i] = 8
			}

		}
	}
}

