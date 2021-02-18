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
			playAnim: false,
			animateCar: false,
			tapWhite: false,
          tapBlue: false,
          tapGrey: false,
          tapRed: false,
          tapYellow: false,
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
                                animation={{name:"tapAnimation", run:this.state.tapWhite, onFinish:this._animateFinished}}
                                shadowCastingBitMask={0} />
                    
                    <ViroSphere materials={["blue_sphere"]}
                                heightSegmentCount={20} widthSegmentCount={20} radius={.03}
                                position={[-.1, .25, 0]}
                                onClick={this._selectBlue}
                                animation={{name:"tapAnimation", run:this.state.tapBlue, onFinish:this._animateFinished}}
                                shadowCastingBitMask={0} />
                    
                    <ViroSphere materials={["grey_sphere"]}
                                heightSegmentCount={20} widthSegmentCount={20} radius={.03}
                                position={[0, .25, 0]}
                                onClick={this._selectGrey}
                                animation={{name:"tapAnimation", run:this.state.tapGrey, onFinish:this._animateFinished}}
                                shadowCastingBitMask={0} />
                    
                    <ViroSphere materials={["red_sphere"]}
                                heightSegmentCount={20} widthSegmentCount={20} radius={.03}
                                position={[.1, .25, 0]}
                                onClick={this._selectRed}
                                animation={{name:"tapAnimation", run:this.state.tapRed, onFinish:this._animateFinished}}
                                shadowCastingBitMask={0} />
                    
                    <ViroSphere materials={["yellow_sphere"]}
                                heightSegmentCount={20} widthSegmentCount={20} radius={.03}
                                position={[.2, .25, 0]}
                                onClick={this._selectYellow}
                                animation={{name:"tapAnimation", run:this.state.tapYellow, onFinish:this._animateFinished}}
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
						castsShadow={true}sssss
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
                  <ViroNode scale={[0, 0, 0]} transformBehaviors={["billboardY"]} animation={{name:this.state.animName, run:this.state.playAnim,}}>
                    <ViroSphere materials={["white_sphere"]}
                                heightSegmentCount={20} widthSegmentCount={20} radius={.03}
                                position={[-.2, .25, 0]}
                                onClick={this._selectWhite}
                                animation={{name:"tapAnimation", run:this.state.tapWhite, onFinish:this._animateFinished}}
                                shadowCastingBitMask={0} />
                    
                    <ViroSphere materials={["blue_sphere"]}
                                heightSegmentCount={20} widthSegmentCount={20} radius={.03}
                                position={[-.1, .25, 0]}
                                onClick={this._selectBlue}
                                animation={{name:"tapAnimation", run:this.state.tapBlue, onFinish:this._animateFinished}}
                                shadowCastingBitMask={0} />
                    
                    <ViroSphere materials={["grey_sphere"]}
                                heightSegmentCount={20} widthSegmentCount={20} radius={.03}
                                position={[0, .25, 0]}
                                onClick={this._selectGrey}
                                animation={{name:"tapAnimation", run:this.state.tapGrey, onFinish:this._animateFinished}}
                                shadowCastingBitMask={0} />
                    
                    <ViroSphere materials={["red_sphere"]}
                                heightSegmentCount={20} widthSegmentCount={20} radius={.03}
                                position={[.1, .25, 0]}
                                onClick={this._selectRed}
                                animation={{name:"tapAnimation", run:this.state.tapRed, onFinish:this._animateFinished}}
                                shadowCastingBitMask={0} />
                    
                    <ViroSphere materials={["yellow_sphere"]}
                                heightSegmentCount={20} widthSegmentCount={20} radius={.03}
                                position={[.2, .25, 0]}
                                onClick={this._selectYellow}
                                animation={{name:"tapAnimation", run:this.state.tapYellow, onFinish:this._animateFinished}}
                                shadowCastingBitMask={0}/>
                  </ViroNode>
                  
                  <Viro3DObject
						scale={[-10, -10, -10]}
						source={require('./res/shapes/object_cube.obj')}
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
              
              <ViroARImageMarker target={"pyramide"}  pauseUpdates={this.state.pauseUpdates}>
                <ViroNode scale={[0, 0, 0]} transformBehaviors={["billboardY"]} animation={{name:this.state.animName, run:this.state.playAnim,}}>
                  <ViroSphere materials={["white_sphere"]}
                              heightSegmentCount={20} widthSegmentCount={20} radius={.03}
                              position={[-.2, .25, 0]}
                              onClick={this._selectWhite}
                              animation={{name:"tapAnimation", run:this.state.tapWhite, onFinish:this._animateFinished}}
                              shadowCastingBitMask={0} />
    
                  <ViroSphere materials={["blue_sphere"]}
                              heightSegmentCount={20} widthSegmentCount={20} radius={.03}
                              position={[-.1, .25, 0]}
                              onClick={this._selectBlue}
                              animation={{name:"tapAnimation", run:this.state.tapBlue, onFinish:this._animateFinished}}
                              shadowCastingBitMask={0} />
    
                  <ViroSphere materials={["grey_sphere"]}
                              heightSegmentCount={20} widthSegmentCount={20} radius={.03}
                              position={[0, .25, 0]}
                              onClick={this._selectGrey}
                              animation={{name:"tapAnimation", run:this.state.tapGrey, onFinish:this._animateFinished}}
                              shadowCastingBitMask={0} />
    
                  <ViroSphere materials={["red_sphere"]}
                              heightSegmentCount={20} widthSegmentCount={20} radius={.03}
                              position={[.1, .25, 0]}
                              onClick={this._selectRed}
                              animation={{name:"tapAnimation", run:this.state.tapRed, onFinish:this._animateFinished}}
                              shadowCastingBitMask={0} />
    
                  <ViroSphere materials={["yellow_sphere"]}
                              heightSegmentCount={20} widthSegmentCount={20} radius={.03}
                              position={[.2, .25, 0]}
                              onClick={this._selectYellow}
                              animation={{name:"tapAnimation", run:this.state.tapYellow, onFinish:this._animateFinished}}
                              shadowCastingBitMask={0}/>
                </ViroNode>
  
                <Viro3DObject
                      scale={[-10, -10, -10]}
                      source={require('./res/shapes/object_pyramide.obj')}
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
	_selectWhite() {
		this.setState({
			texture: "white",
			tapWhite: true
		})
	},
  _selectBlue(){
    this.setState({
      texture : "blue",
      tapBlue: true
    })
  },
  _selectGrey(){
    this.setState({
      texture : "grey",
      tapGrey: true
    })
  },
  _selectRed(){
    this.setState({
      texture : "red",
      tapRed: true
    })
  },
  _selectYellow(){
    this.setState({
      texture : "yellow",
      tapYellow: true
    })
  },
	_animateFinished() {
		this.setState({
			tapWhite: false,
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
