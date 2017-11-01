#############################################################################
##
#W  menu.gd                    FRANCY library                  Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
## Categories
##

#############################################################################
##
#C  IsMenu( <obj> ) . . . . . . . . . . . category of menus
##
DeclareCategory("IsMenu", IsFrancyObject);


#############################################################################
##
## Families
##

#############################################################################
##
#V  MenuFamily
##
BindGlobal("MenuFamily", NewFamily("MenuFamily", IsMenu));


#############################################################################
##
## Representations
##

#############################################################################
##
#R  IsMenuRep  . . . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation("IsMenuRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["id", "title", "callback", "menus"], IsMenu);


#############################################################################
##
## Operations
##

#############################################################################
##
#O  Menu( <title>, <object> )
##
##
DeclareOperation("Menu", [IsString, IsCallback]);

#############################################################################
##
#O  Add( <menu>, <direct submenu> )
#O  Add( <menu>, <list of menu> )
##
## 
##
DeclareOperation("Add", [IsMenu, IsMenu]);

#############################################################################
##
#O  Remove( <menu>, <menu> )
#O  Remove( <menu>, <list of menu> )
##
## 
##
DeclareOperation("Remove", [IsMenu, IsMenu]);