# JavaScriptNotes

Variables
=========
-Variables are containers for storing data values. 
 Variable is a name of memory location.
-Variables in Javascript can be declared by using either one of the below 3 keywords:
 1. var   
 2. let
 3. const

	var						let						 const
======================================================================
1.since begining		 1.ECMASCRIPT-6(2015)		1.ECMASCRIPT-6(2015)
2.value can be changed   2.value can be changed     2.cann't be changed
3.initialization is		 3.initialization is		3.mandatory
	not mandatory           not mandatory	
4.can be redeclared		 4.cann't be redeclared		4.cann't be redeclared
5.TDZ - No			 	 5.TDZ - Yes				5.TDZ - Yes
6.function/global		 6.block/function/global	6.block/function/global

N:p - All variables (var,let,const) are hoisted but only 'var' variables are usable/reachable before initialization.
-let/const variables are not reachable/usable before initialization (Temporal Dead Zone)




i integrated git with jenkins

now i automatic deploy to the jenkins and git
after every commit in the github
