import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faBath } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Link from "next/link";
library.add(faEnvelope, faBath);



export default function Dashboard() {
	let list = [];

	for (let i = 0; i < 2; i ++) {
		list.push(
			<Link key={i} href="#">

			<div className="card bg-slate-100 rounded-xl p-5 md:p-3 dark:bg-slate-800">
				<div className="card-header">
					<img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
						 src="https://media.laforet.com/office9/laforet_larbresle/catalog/images/pr_p/2/2/0/9/3/2/8/3/22093283a.jpg?timestamp=1711724907&twic=v1/cover=650x492"
						 alt="" width="384"
						 height="512"/>
				</div>
				<div className="card-bottom mt-2">
					<div className="title-price md:flex justify-between">
						<span className="title font-medium text-lg"> Maison</span>
						<span className="price  text-lg"> 140 000€</span>
					</div>
					<p className="location">Strasbourg</p>
					<div className="md:flex justify-between text-xs">
						<div className="text-white bg-blue-500 font-medium rounded-lg p-1">
							89 m²
						</div>
						<div className="text-white bg-blue-500 font-medium rounded-lg p-1">
							3 pièces
						</div>
						<div className="text-white bg-blue-500 font-medium rounded-lg p-1">
							2 chambres
						</div>
					</div>
					<div className="equipement mt-2 md:flex justify-between text-xs">
						<div className="border-2 rounded border-blue-500">
							<FontAwesomeIcon className='p-5' icon={faEnvelope} style={{color: "#fab",}} size="5x"/>
						</div>
						<div className="border-2 rounded border-blue-500">
							Bath
							{/*<FontAwesomeIcon className="p-5" icon={faBath} size="3x" />*/}
						</div>
					</div>
				</div>
			</div>
			</Link>
					)
}
	return (
		<div>
			<div className="self-end mb-10 bg-blue-300 rounded-lg">
				<Link href="/dashboard/property">
					Ajouter un logement
				</Link>
			</div>
			<div className="flex flex-row space-x-4">
					{list}
					</div>
		</div>
			)


}