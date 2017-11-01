#############################################################################
##
#W  callback.gd                 FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
## Globals
##

#############################################################################
##
#V FrancyCallbacks . . . . . . Contains the record of callbacks to be executed
##
BindGlobal("FrancyCallbacks", rec());


#############################################################################
##
## Categories
##

#############################################################################
##
#O  IsCallback( <obj> )
##
DeclareCategory("IsCallback", IsFrancyObject);

#############################################################################
##
#C  IsCallbackRequiredArg( <obj> ) . . . . . . . category of callbacks args
##
DeclareCategory( "IsRequiredArg", IsFrancyObject );

#############################################################################
##
#O  IsArgType( <obj> )
##
DeclareCategory("IsArgType", IsFrancyObject);

#############################################################################
##
#O  IsCallbackType( <obj> )
##
DeclareCategory("IsCallbackType", IsFrancyObject);

#############################################################################
##
## Families
##

#############################################################################
##
#V  CallbackFamily
##
BindGlobal("CallbackFamily", NewFamily("CallbackFamily", IsCallback));


#############################################################################
##
## Representations
##

#############################################################################
##
#R  IsCallbackRep  . . . . . . . . . . . . . . . . . . default representation
##
DeclareRepresentation("IsCallbackRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["id", "type", "func", "knownArgs", "requiredArgs"], IsCallback);

#############################################################################
##
#R  IsCallbackRequiredArgRep  . . . . . . . . .. . . . default representation
##
DeclareRepresentation("IsRequiredArgRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["id", "type", "title", "value"], IsRequiredArg);

#############################################################################
##
#R  IsArgTypeRep  . . . . . . . . . .  default representation
##
DeclareRepresentation("IsArgTypeRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["value"], IsArgType);

#############################################################################
##
#R  IsArgTypeRep  . . . . . . . . . .  default representation
##
DeclareRepresentation("IsCallbackTypeRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["value"], IsCallbackType);


#############################################################################
##
## Operations
##

#############################################################################
##
#O  Callback( <callback type>, <trigger event>, <function>, <args> )
##
## Creates a Callback objec that holds the function and args to be executed 
## remotly by a trigger based on a trigger type.
##
DeclareOperation("Callback", [IsCallbackType, IsTriggerEvent, IsFunction, IsList]);

#############################################################################
##
#O  CallbackRequiredArgs( <calbback args type>, <title> )
##
## Creates a Callback Require Argument
##
DeclareOperation("RequiredArg", [IsArgType, IsString]);

#############################################################################
##
#O  Add( <callback>, <arg> )
#O  Add( <callback>, <list of args> )
##
## 
##
DeclareOperation("Add", [IsCallback, IsRequiredArg]);

#############################################################################
##
#O  Remove( <callback>, <arg> )
#O  Remove( <callback>, <list of args> )
##
## 
##
DeclareOperation("Remove", [IsCallback, IsRequiredArg]);
