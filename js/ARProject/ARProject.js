'use strict';

import React, {Component} from 'react';

import {StyleSheet} from 'react-native';

import {
	ViroARScene,
	ViroMaterials,
	ViroNode,
	ViroAnimations,
	Viro3DObject,
	ViroLightingEnvironment,
	ViroARImageMarker,
	ViroARTrackingTargets,
	ViroSphere,
	ViroSpotLight,
	ViroQuad,
} from 'react-viro';

// import ColorPoint from ColorPoint;

var createReactClass = require('create-react-class');


var ARSphere = createReactClass({
	getInitialState() {
		return {
			texture: "white",
			textureC: "white",
			textureT: "white",
			playAnim: false,
			playAnimTriangle: false,
			playAnimCube: false,
			animateCar: false,
			squareTapWhite: false,
          squareTapBlue: false,
          squareTapGrey: false,
          squareTapRed: false,
          squareTapYellow: false,
			sphereTapWhite: false,
          sphereTapBlue: false,
          sphereTapGrey: false,
          sphereTapRed: false,
          sphereTapYellow: false,
			trangleTapWhite: false,
          trangleTapBlue: false,
          trangleTapGrey: false,
          trangleTapRed: false,
          trangleTapYellow: false,
		}
	},
	
	render: function () {
		return (
			<ViroARScene onAnchorRemoved={this._onAnchorRemoved} onAnchorFound={this._onAnchorFound}>
				
				<ViroLightingEnvironment source={require('./res/shapes/garage_1k.hdr')}/>
				
				<ViroARImageMarker target={"sphere"}
				                   pauseUpdates={this.state.pauseUpdates}>
                  <ViroNode scale={[0, 0, 0]} transformBehaviors={["billboardY"]} animation={{name:this.state.animName, run:this.state.playAnim,}}>
                    <ViroSphere materials={["white_sphere"]}
                                heightSegmentCount={20} widthSegmentCount={20} radius={.03}
                                position={[-.2, .25, 0]}
                                onClick={this._selectWhite}
                                animation={{name:"tapAnimation", run:this.state.sphereTapWhite, onFinish:this._animateFinished}}
                                shadowCastingBitMask={0} />
                    
                    <ViroSphere materials={["blue_sphere"]}
                                heightSegmentCount={20} widthSegmentCount={20} radius={.03}
                                position={[-.1, .25, 0]}
                                onClick={this._selectBlue}
                                animation={{name:"tapAnimation", run:this.state.sphereTapBlue, onFinish:this._animateFinished}}
                                shadowCastingBitMask={0} />
                    
                    <ViroSphere materials={["grey_sphere"]}
                                heightSegmentCount={20} widthSegmentCount={20} radius={.03}
                                position={[0, .25, 0]}
                                onClick={this._selectGrey}
                                animation={{name:"tapAnimation", run:this.state.sphereTapGrey, onFinish:this._animateFinished}}
                                shadowCastingBitMask={0} />
                    
                    <ViroSphere materials={["red_sphere"]}
                                heightSegmentCount={20} widthSegmentCount={20} radius={.03}
                                position={[.1, .25, 0]}
                                onClick={this._selectRed}
                                animation={{name:"tapAnimation", run:this.state.sphereTapRed, onFinish:this._animateFinished}}
                                shadowCastingBitMask={0} />
                    
                    <ViroSphere materials={["yellow_sphere"]}
                                heightSegmentCount={20} widthSegmentCount={20} radius={.03}
                                position={[.2, .25, 0]}
                                onClick={this._selectYellow}
                                animation={{name:"tapAnimation", run:this.state.sphereTapYellow, onFinish:this._animateFinished}}
                                shadowCastingBitMask={0}/>
                  </ViroNode>
                  
                  <Viro3DObject
						scale={[-10, -10, -10]}
						source={require('./res/shapes/object_sphere.obj')}
						type="OBJ"
						materials={this.state.texture}
						onClick={this._toggleButtons}
						animation={{name: "scaleCar", run: this.state.animateCar,}}/>
					
					<ViroSpotLight
						innerAngle={5}
						outerAngle={25}
						direction={[0, -1, 0]}
						position={[0, 5, 1]}
						color="#ffffff"
						castsShadow={true}
						shadowMapSize={2048}
						shadowNearZ={2}
						shadowFarZ={7}
						shadowOpacity={.7}/>
					
					<ViroQuad
						rotation={[-90, 0, 0]}
						position={[0, -0.001, 0]}
						width={2.5} height={2.5}
						arShadowReceiver={true}/>
				
				</ViroARImageMarker>
				
				<ViroARImageMarker target={"cube"}
				                   pauseUpdates={this.state.pauseUpdates}>
                  <ViroNode scale={[0, 0, 0]} transformBehaviors={["billboardY"]} animation={{name:this.state.animNameC, run:this.state.playAnimCube,}}>
                    <Viro3DObject materials={["white_sphere"]}
                                position={[-.16, .25, 0]}
                                  type="OBJ"
                                  source={require('./res/shapes/object_cube.obj')}
                                  scale={[.02, .02, .02]}
                                onClick={this._selectWhiteC}
                                shadowCastingBitMask={0} />
                    
                    <Viro3DObject materials={["blue_sphere"]}
                                position={[-.08, .25, 0]}
                                  type="OBJ"
                                  source={require('./res/shapes/object_cube.obj')}
                                  scale={[.02, .02, .02]}
                                onClick={this._selectBlueC}
                                shadowCastingBitMask={0} />
                    
                    <Viro3DObject materials={["grey_sphere"]}
                                position={[0, .25, 0]}
                                  type="OBJ"
                                  source={require('./res/shapes/object_cube.obj')}
                                  scale={[.02, .02, .02]}
                                onClick={this._selectGreyC}
                                shadowCastingBitMask={0} />
                    
                    <Viro3DObject materials={["red_sphere"]}
                                position={[.08, .25, 0]}
                                  type="OBJ"
                                  source={require('./res/shapes/object_cube.obj')}
                                  scale={[.02, .02, .02]}
                                onClick={this._selectRedC}
                                shadowCastingBitMask={0} />
                    
                    <Viro3DObject materials={["yellow_sphere"]}
                                  position={[.16, .25, 0]}
                                  type="OBJ"
                                source={require('./res/shapes/object_cube.obj')}
                                scale={[.02, .02, .02]}
                                onClick={this._selectYellowC}
                                shadowCastingBitMask={0}/>
                  </ViroNode>
                  
                  <Viro3DObject
						scale={[-10, -10, -10]}
						source={require('./res/shapes/object_cube.obj')}
						type="OBJ"
						materials={this.state.textureC}
						onClick={this._toggleButtonsCube}
						animation={{name: "scaleCar", run: this.state.animateCar,}}/>
					
					<ViroSpotLight
						innerAngle={5}
						outerAngle={25}
						direction={[0, -1, 0]}
						position={[0, 5, 1]}
						color="#ffffff"
						castsShadow={true}
						shadowMapSize={2048}
						shadowNearZ={2}
						shadowFarZ={7}
						shadowOpacity={.7}/>
					
					<ViroQuad
						rotation={[-90, 0, 0]}
						position={[0, -0.001, 0]}
						width={2.5} height={2.5}
						arShadowReceiver={true}/>
				
				</ViroARImageMarker>
              
              <ViroARImageMarker target={"pyramide"}  pauseUpdates={this.state.pauseUpdates}>
                <ViroNode scale={[0, 0, 0]} transformBehaviors={["billboardY"]} animation={{name:this.state.animNameT, run:this.state.playAnimTriangle,}}>
                  <Viro3DObject materials={["white_sphere"]}
                                position={[-.16, .25, 0]}
                                type="OBJ"
                                source={require('./res/shapes/object_pyramide.obj')}
                                scale={[.02, .02, .02]}
                              onClick={this._selectWhiteT}
                              shadowCastingBitMask={0} />
    
                  <Viro3DObject materials={["blue_sphere"]}
                                position={[-.08, .25, 0]}
                                type="OBJ"
                                source={require('./res/shapes/object_pyramide.obj')}
                                scale={[.02, .02, .02]}
                              onClick={this._selectBlueT}
                              shadowCastingBitMask={0} />
    
                  <Viro3DObject materials={["grey_sphere"]}
                                position={[0, .25, 0]}
                                type="OBJ"
                                source={require('./res/shapes/object_pyramide.obj')}
                                scale={[.02, .02, .02]}
                              onClick={this._selectGreyT}
                              shadowCastingBitMask={0} />
    
                  <Viro3DObject materials={["red_sphere"]}
                                position={[.08, .25, 0]}
                                type="OBJ"
                              source={require('./res/shapes/object_pyramide.obj')}
                              scale={[.02, .02, .02]}
                              onClick={this._selectRedT}
                              shadowCastingBitMask={0} />
    
                  <Viro3DObject materials={["yellow_sphere"]}
                                position={[.16, .25, 0]}
                                type="OBJ"
                                source={require('./res/shapes/object_pyramide.obj')}
                                scale={[.02, .02, .02]}
                                onClick={this._selectYellowT}
                              shadowCastingBitMask={0}/>
                </ViroNode>
  
                <Viro3DObject
                      scale={[-10, -10, -10]}
                      source={require('./res/shapes/object_pyramide.obj')}
                      type="OBJ"
                      materials={this.state.textureT}
                      onClick={this._toggleButtonsTriangle}
                      animation={{name: "scaleCar", run: this.state.animateCar,}}/>
                  <ViroSpotLight
                      innerAngle={5}
                      outerAngle={25}
                      direction={[0, -1, 0]}
                      position={[0, 5, 1]}
                      color="#ffffff"
                      castsShadow={true}
                      shadowMapSize={2048}
                      shadowNearZ={2}
                      shadowFarZ={7}
                      shadowOpacity={.7}/>
                  <ViroQuad
                      rotation={[-90, 0, 0]}
                      position={[0, -0.001, 0]}
                      width={2.5} height={2.5}
                      arShadowReceiver={true}/>
				</ViroARImageMarker>
			
			</ViroARScene>
		);
	},
	_onAnchorFound() {
	 
		this.setState({
			animateCar: true,
		})
		
	},_onAnchorRemoved() {
	 
		this.setState({
			animateCar: false,
		})
		
	},
	_toggleButtons() {
		this.setState({
			animName: (this.state.animName == "scaleUp" ? "scaleDown" : "scaleUp"),
			playAnim: true
		})
	},
	_toggleButtonsTriangle() {
		this.setState({
			animNameT: (this.state.animNameT == "scaleUp" ? "scaleDown" : "scaleUp"),
			playAnimTriangle: true
		})
	},
	_toggleButtonsCube() {
		this.setState({
			animNameC: (this.state.animNameC == "scaleUp" ? "scaleDown" : "scaleUp"),
			playAnimCube: true
		})
	},
	_selectWhite() {
		this.setState({
			texture: "white",
			sphereTapWhite: true,
			
		})
	},
	_selectWhiteT() {
		this.setState({
			textureT: "white",
			trangleTapWhite: true,
		})
	},_selectWhiteC() {
		this.setState({
			textureC: "white",
			squareTapWhite: true,
		})
	},
  _selectBlue(){
    this.setState({
      texture: "blue",
	    sphereTapBlue: true,
	
    })
  }, _selectBlueT(){
    this.setState({
      textureT : "blue",
	    trangleTapBlue: true,
    })
  },_selectBlueC(){
    this.setState({
      textureC : "blue",
	    squareTapBlue: true,
    })
  },
  _selectGrey(){
    this.setState({
      texture : "grey",
	    sphereTapGrey: true,
	
    })
  },_selectGreyT(){
    this.setState({
      textureT : "grey",
	    trangleTapGrey: true,
    })
  },_selectGreyC(){
    this.setState({
      textureC: "grey",
	    squareTapGrey: true,
    })
  },
  _selectRed(){
    this.setState({
      texture : "red",
	    sphereTapRed: true,
	
    })
  },_selectRedT(){
    this.setState({
      textureT: "red",
	    trangleTapRed: true,
    })
  },_selectRedC(){
    this.setState({
      textureC: "red",
	    squareTapRed: true,
    })
  },
  _selectYellow(){
    this.setState({
      texture : "yellow",
	   sphereTapYellow: true,
	
    })
  },_selectYellowT(){
    this.setState({
      textureT : "yellow",
	    trangleTapYellow: true,
    })
  },_selectYellowC(){
    this.setState({
      textureC : "yellow",
	    squareTapYellow: true,
    })
  },
	_animateFinished() {
		this.setState({
			squareTapWhite: true,
			trangleTapWhite: true,
			sphereTapWhite: true,
		})
	},
});

ViroMaterials.createMaterials({
	white: {
		lightingModel: "PBR",
      diffuseColor: "rgb(231,231,231)",
      
    },
  blue: {
    lightingModel: "PBR",
        diffuseColor: "rgb(19,42,143)",
  },
  grey: {
    lightingModel: "PBR",
        diffuseColor: "rgb(75,76,79)",
  },
  red: {
    lightingModel: "PBR",
        diffuseColor: "rgb(168,0,0)",
  },
  yellow: {
    lightingModel: "PBR",
        diffuseColor: "rgb(200,142,31)",
  
  },
	white_sphere: {
		lightingModel: "PBR",
		diffuseColor: "rgb(231,231,231)",
	},
  blue_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(19,42,143)",
  },
  grey_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(75,76,79)",
  },
  red_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(168,0,0)",
  },
  yellow_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(200,142,31)",
  },
});

ViroARTrackingTargets.createTargets({
	sphere: {
		source: require('./res/sphere.png'),
		orientation: "Up",
		physicalWidth: 0.165 // real world width in meters
	},
	cube: {
		source: require('./res/cube.png'),
		orientation: "Up",
		physicalWidth: 0.165 // real world width in meters
	},
	pyramide: {
		source: require('./res/pyramide.png'),
		orientation: "Up",
		physicalWidth: 0.165 // real world width in meters
	}
});

ViroAnimations.registerAnimations({
	scaleUp: {
		properties: {scaleX: 1, scaleY: 1, scaleZ: 1,},
		duration: 500, easing: "bounce"
	},
	scaleDown: {
		properties: {scaleX: 0, scaleY: 0, scaleZ: 0,},
		duration: 200,
	},
	scaleCar: {
		properties: {scaleX: .09, scaleY: .09, scaleZ: .09,},
		duration: 500, easing: "bounce"
	},
	scaleSphereUp: {
		properties: {scaleX: .8, scaleY: .8, scaleZ: .8,},
		duration: 50, easing: "easeineaseout"
	},
	scaleSphereDown: {
		properties: {scaleX: 1, scaleY: 1, scaleZ: 1,},
		duration: 50, easing: "easeineaseout"
	},
	tapAnimation: [["scaleSphereUp", "scaleSphereDown"],]
});

module.exports = ARSphere;
