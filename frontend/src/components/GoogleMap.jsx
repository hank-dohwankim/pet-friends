  
import React, { Fragment, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Pet from './../components/Pet';

function PetMarker(props) {
	const [visible, setVisible] = useState(false);
	const pet = props.pet;

	return (
		<Fragment>
			<div onClick={()=>{setVisible(!visible)}} style={{cursor: "pointer"}}><i class="fas fa-map-marker-alt fa-2x"></i><span>{pet.name}</span></div>
			{visible &&
				<div class="card" style={{width: "200px"}}>
					<img src={pet.image} width="100%" alt="pet-image" />
					<div
						style={{
							position: "absolute",
							top: "5%",
							left: "90%",
							transform: "translate(-50%, -50%)",
							color: "white",
							border: "none",
							cursor: "pointer",
							borderRadius: "5px",
							textAlign: "center"
						}}
						onClick={()=>{setVisible(!visible)}}
					><i class="far fa-times-circle fa-2x"></i></div>
					<div class="card-body">
						<h5 class="card-title">{pet.name}</h5>
						<div class="card-text">
							<div class="row">
								<div class="col"><b>Breed:&nbsp;</b></div>
								<div class="col">{pet.breed}</div>
							</div>
							<div class="row">
								<div class="col"><b>Sex:&nbsp;</b></div>
								<div class="col">{pet.sex}</div>
							</div>
							<p style={{marginBottom: "0px"}}><b>Introduce</b></p>
							<p>{pet.introduce}</p>

						</div>
					</div>
				</div>
			}
		</Fragment>
	);
}

export default function GoogleMap(props) {
	const defaultLocation = {
		lat: 49.8951,
		lng: -97.1384
	};

	const defaultZoom = 10;

	const pets = props.pets.map((pet) => {
		return <PetMarker key={pet._id}
			lat={pet.latitude} 
			lng={pet.longitude}
			pet={pet}
		/>
	});

	return (
		<div id="google-map" style={{width: "100%", height: "800px"}}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
				defaultCenter={defaultLocation}
				defaultZoom={defaultZoom}
			>
				{pets}
			</GoogleMapReact>
		</div>
	);
}