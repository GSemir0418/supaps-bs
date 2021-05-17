import React, { useEffect } from 'react'
import * as THREE from 'three'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './TestModel.scss';
import { px } from '../../shared/px'

function ThreeBim () {
  useEffect(() => {
    let container
    let camera, scene, renderer
    let group

    // 模型组的外接盒
    let envelopeBox = new THREE.Box3()

    //模型路径
    let mat1 = '/testobj/lancuiting.mtl'
    let obj1 = '/testobj/lancuiting.obj'

    let model1 = null

    // 模型是否自传
    let rotation = true

    init()
    animate()

    function init () {
      container = document.getElementById('canvas-frame')

      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        10,
        10000000
      )
      camera.position.z = 800
      camera.position.y = 200

      scene = new THREE.Scene()

      group = new THREE.Group()
      scene.add(group)

      //scene.add(new THREE.AmbientLight(0xFFFFFF, 1.5));

      let dLight = new THREE.DirectionalLight(0xffffff, 2)
      dLight.position.set(500, 1000, 4000)
      dLight.castShadow = true
      scene.add(dLight)

      new MTLLoader().load(mat1, function (mat) {
        mat.preload()
        new OBJLoader().setMaterials(mat).load(obj1, function (loadedMesh) {
          model1 = loadedMesh
          let k
          for (k in model1.children) {
            model1.children[k].castShadow = true
            model1.children[k].receiveShadow = true
          }
          model1.traverse(function (value) {
            if (value.isMesh) {
              value.castShadow = true
              value.receiveShadow = true
            }
          })
          model1.scale.set(1.4, 1.4, 1.4)
          console.log(loadedMesh)
          group.add(model1)
          envelopeBox.expandByObject(group)
        })
      })

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
        autoClear: true
      })
      // renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setSize(px(1200), px(780))


      container.appendChild(renderer.domElement)

      window.addEventListener('resize', onWindowResize, false)

      let orbitControls = new OrbitControls(camera, renderer.domElement)
      orbitControls.autoRotate = false
    }

    function onWindowResize () {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()

      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    function animate () {
      requestAnimationFrame(animate)

      render()
    }

    function render () {
      if (rotation) {
        group.rotation.y += 0.01
      }
      renderer.shadowMap.enabled = true
      renderer.render(scene, camera)
    }
  }, [])
  return <div id='canvas-frame'></div>
}

export default ThreeBim
