
function ProcGen() {

	//cellularism
	if (timeChecker % 60 == 0 && ViralImpact) {
		GameOfCorruption()
	}

	//when 10 seconds is over
	if (seconds == 10) {
		seconds = 0
	}

	if ((!mainMenu && !TheEnd && !introActive) || ingameChecker == 6000) {
		ingameChecker = 0
	}

	RoundCounter = RoundCounter + 1

	//empty map
	for (j = 1; j < 24; j++) {
		for (i = 1; i < 24; i++) {
			Map[j][i] = 1;
		}
	}

	// creating a new one
	GenerateBrandNewLevel()

	// sound
	if (introActive == false) {
		//love.audio.play(SoundSet[6])
		//if (not SoundSet[6]:isStopped())
		//{
			//if (timeChecker%1==0) {
				//SoundSet[6]:rewind()
			//}
		//}

	}
}

function generateBrandNewLevel() {

	//empty map and its variables in 2 steps:

  	//1: add layer (PhaserJS feature)
	if (typeof layer != "object") {
		layer = map.create('level', mapsize, mapsize, tilesize, tilesize);
		layer.resizeWorld();
		drawable.add(layer);
	}

  	//2: upload tilemap
	for (i = 0; i < map.width; i++) {
		for (j = 0; j < map.height; j++) {
			map.putTile(1, i, j, layer);
		};
	};

	if (roundCounter == 0) {
		terminalsVisited = 0;
		loggedAmount = 0;
	}

	// level generating codes for each difficulty

	//1.: firewall, logpoint, no basic antivirus (no terminal, dynamic firewall or virus slots)
	if (Difficulty == 1) {

		ViralImpact = false
		HasDynamic = false

		if (RoundCounter == 0) {
			TerminalCondition = 0
		}

		LogPointAmount = 90
		AntivirusAmount = 1
		FirewallAmount = 30
	}

	//2: more firewall, and logpoint, no basic antivirus (no terminal, dynamic firewall or virus slots)
	if (Difficulty == 2) {

		ViralImpact = false
		HasDynamic = false

		if (RoundCounter == 0) {
			TerminalCondition = 0
		}

		LogPointAmount = 120
		AntivirusAmount = 1
		FirewallAmount = 75
	}

	//3: a lot of firewalls, same amount of logpoints, basic antivirus, 2 terminals to visit(no dynamic firewall or virus slots)
	if (Difficulty == 3) {

		ViralImpact = false
		HasDynamic = false

		if (RoundCounter == 0) {
			TerminalCondition = 2
		}

		LogPointAmount = 120
		AntivirusAmount = 10
		FirewallAmount = 100
	}

	//4: even more firewalls, more logpoints, basic antivirus, 3 terminals to visit(no dynamic firewall or virus slots)
	if (Difficulty == 4) {

		ViralImpact = false
		HasDynamic = false

		if (RoundCounter == 0) {
			TerminalCondition = 3
		}

		LogPointAmount = 150
		AntivirusAmount = 10
		FirewallAmount = 120
	}

	//5: maxfirewalls, less logpoints, more antivirus, 4 terminals to visit, dynamic firewall (no virus slots)
	if (Difficulty == 5) {

		ViralImpact = false
		HasDynamic = true

		if (RoundCounter == 0) {
			TerminalCondition = 4
		}

		LogPointAmount = 50
		AntivirusAmount = 30
		FirewallAmount = 140
	}

	//6:  ANTIVIRUS CHALLANGE: no firewalls, no logpoints, lotsa antivirus, 4 terminals to visit, no dynamic firewall (no virus slots)
	if (Difficulty == 6) {

		ViralImpact = false
		HasDynamic = false

		if (RoundCounter == 0) {
			TerminalCondition = 4
		}

		LogPointAmount = 0
		AntivirusAmount = 300
		FirewallAmount = 0
	}

	//7: GRIDLOCK: lotsa firewalls, a bit more logpoints, less basic antivirus, 4 terminals to visit, no dynamic firewall,virus slots
	if (Difficulty == 7) {

		ViralImpact = true
		HasDynamic = false

		if (RoundCounter == 0) {
			TerminalCondition = 4
		}

		LogPointAmount = 10
		AntivirusAmount = 10
		FirewallAmount = 300
	}

	//8: TERMINAL HUNTER: less firewalls, average logpoints, few basic antivirus, 8 terminals to visit, dynamic firewall, virus slots
	if (Difficulty == 8) {

		ViralImpact = true
		HasDynamic = true

		if (RoundCounter == 0) {
			TerminalCondition = 12
		}

		LogPointAmount = 150
		AntivirusAmount = 10
		FirewallAmount = 100
	}

	//9: VIRUS FIELD: a bit more firewalls, less logpoints, lot of antivirus, 6 terminals to visit, dynamic firewall, virus slots
	if (Difficulty == 9) {

		ViralImpact = true
		HasDynamic = true

		if (RoundCounter == 0) {
			TerminalCondition = 6
		}

		LogPointAmount = 30
		AntivirusAmount = 80
		FirewallAmount = 100
	}

	//10: FINAL CHALLANGE: a bit more firewalls, several logpoints, lot of antivirus, 20 terminals to visit, dynamic firewall, virus slots
	if (Difficulty == 10) {

		ViralImpact = true
		HasDynamic = true

		if (RoundCounter == 0) {
			TerminalCondition = 20
		}

		LogPointAmount = 200
		AntivirusAmount = 10
		FirewallAmount = 150
	}


		//exit
		Dynamic_X = Math.floor(Math.random() * 24)
		Dynamic_Y = Math.floor(Math.random() * 24)
		randX = Math.floor(Math.random() * 24)
		randY = Math.floor(Math.random() * 24)

		Map[randX][randY] = 5

		//viral blocks
		if (ViralImpact) {
			for (k = 1; k < 5; k++) {
				while (Map[randX][randY] != 1 || (randX == meOnField_X && randY == meOnField_Y)) {
					randX = Math.floor(Math.random() * 24)
					randY = Math.floor(Math.random() * 24)
				}
			}

			Map[randX][randY] = 8
		}

		// dynamic firewall
		if (HasDynamic) {
			while (Map[Dynamic_X][Dynamic_Y] != 1 || (Dynamic_X == meOnField_X && Dynamic_Y == meOnField_Y)) {
				Dynamic_X = Math.floor(Math.random() * 24)
				Dynamic_Y = Math.floor(Math.random() * 24)
			}

			FirewallFill()
			FirewallClean()

			// charge dynamic firewall
			FirewallCharge()

			Map[Dynamic_X][Dynamic_Y] = 7

		}



		// terminals (visit them first to leave)
		for (k = 1; k < TerminalCondition-TerminalsVisited; k++) {

			while (Map[randX][randY] != 1 || (randX == meOnField_X && randY == meOnField_Y)) {
				randX = math.random(24)
				randY = math.random(24)
			}

			Map[randX][randY] = 6
		}

		//antivirus scanfield
		for (k = 1; k < LoggedAmount+AntivirusAmount; k++) {

			while (Map[randX][randY] != 1 || (randX == meOnField_X && randY == meOnField_Y)) {
				randX = math.random(24)
				randY = math.random(24)
			}

			Map[randX][randY] = 4
		}

		// firewalls
		for (k = 1; k < FirewallAmount; k++) {

			while (Map[randX][randY] != 1 || (randX == meOnField_X && randY == meOnField_Y)) {
				randX = math.random(24)
				randY = math.random(24)
			}

			Map[randX][randY] = 2
		}

		// logpoints (the more occasions you have detected, the less they are appearing
		for (k = 1; k < LogPointAmount-LoggedAmount; k++) {

			while (Map[randX][randY] != 1 || (randX == meOnField_X && randY == meOnField_Y)) {
				randX = math.random(24)
				randY = math.random(24)
			}

			Map[randX][randY] = 3
		}

}
