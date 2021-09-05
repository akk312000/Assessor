import { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Applicant from "../components/applicant";
import JobDescription from "../components/job_desc"

import { applicants, job_desc } from '../components/dummy'

export default function Home() {

	const [jobSearch, setJobSearch] = useState('');
	const [candidateSearch, setCandidateSearch] = useState('');

	return (
		<div>
			<head>
				<title>Resume Analyser</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css"></link>
			</head>
			<div className="main-div">
				<div className="columns is-gapless box-container">
					<div className="column is-three-fifths">
						<div className="box">
							<div className="search-div">
								<input class="input is-rounded is-small center-text" value={jobSearch} onChange={e => setJobSearch(e.target.value)} type="text" placeholder="Search" />
							</div>

							{
								jobSearch == '' ?

									job_desc.map((job) => {
										//return <Applicant data={applicant} />;
										return <JobDescription data={job} />
									})
									:
									job_desc.filter((job) => {
										return job.company.toLowerCase().includes(jobSearch.toLowerCase())
											||
											job.position.toLowerCase().includes(jobSearch.toLowerCase())


									}).map((job) => {
										//return <Applicant data={applicant} />;
										return <JobDescription data={job} />
									})
							}

							<div className="float">
								<FontAwesomeIcon className="float-action-button" icon={faPlus} />
							</div>
						</div>
					</div>
					<div className="column">
						<div className="box">
							<div className="search-div">
								<input class="input is-rounded is-small center-text" value={candidateSearch} onChange={e => setCandidateSearch(e.target.value)} type="text" placeholder="Search" />
							</div>

							{
								candidateSearch == '' ?

									applicants.map((applicant) => {
										//return <Applicant data={applicant} />;
										return <Applicant data={applicant} />
									})
									:
									applicants.filter((applicant) => {
										return applicant.name.toLowerCase().includes(candidateSearch.toLowerCase())
											||
											applicant.college.toLowerCase().includes(candidateSearch.toLowerCase())


									}).map((applicant) => {
										//return <Applicant data={applicant} />;
										return <Applicant data={applicant} />
									})
							}

							<div className="float">
								<FontAwesomeIcon className="float-action-button" icon={faPlus} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}