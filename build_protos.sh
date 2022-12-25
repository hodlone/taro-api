#!/bin/bash

#check if yarn has been installed
#regex match the word success
if [[ $(yarn check) =~ "success" ]]; then
    echo "GRPC dependencies are installed."
else
    echo "Dependency yarn is not installed. Please install yarn and try again."
    #Ask user y/n to install dependencies
    read -p "Install dependencies? (y/n) " -n 1 -r
    #if user says no exit else run "yarn install"
    if [[ ! $REPLY =~ ^[Yy]$ ]]
    then
        echo "Exiting..."
        exit 1
    else
        echo "Installing dependencies..."
        yarn install
    fi
fi


PROTO_DIR=./protos
PROTO_FILE=$PROTO_DIR/taro.proto
if [ "$#" -ne 1 ]; then
    echo "No argument supplied, using default path: $PROTO_FILE"
else
    echo "Using custom proto file: $1"
    #check if file exists
    if ! [ -f "$1" ]; then
        echo "Proto file $1 does not exist"
        exit 1
    fi
    PROTO_FILE=$1
fi

#Generate Javascript code
yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --longs=String --enums=String --defaults --oneofs --keepCase --outDir=./src/types $PROTO_FILE