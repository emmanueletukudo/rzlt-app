import React from 'react'
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import { useGithub } from '../contexts/GithubContext'
import Repo from './Repo';

function UserCard() {
  const { user, repos} = useGithub();
	const { avatar_url, html_url, name, company, blog, location, bio, twitter_username} = user || {};

	return (
		<Wrapper>
			<header>
				<img src={avatar_url} alt={name}></img>
				<div>
					<h4 data-testid="username">{name}</h4>
					<p>@{twitter_username || 'john doe'}</p>
				</div>
				<a href={html_url}>follow</a>
			</header>
			<p className='bio'>{bio}</p>
			<div className='links'>
				{company &&
          <p>
					<MdBusiness></MdBusiness>
					{company}
				</p>
        }
				<p>
					<MdLocationOn></MdLocationOn>
					{location || 'earth'}
				</p>
				<a href={`https://${blog}`}>
					<MdLink></MdLink>
					{blog}
				</a>
			</div>
      <div className="repo">
        <h4>Repositories</h4>
				<div data-testid="repo-list">
        {repos && repos.map((r, k)=> (
          <Repo key={k} name={r.name} url={r.url} description={r.description} />
        ))}
				</div>
      </div>
		</Wrapper>
	);
};
const Wrapper = styled.article`
  margin-top: 2rem;
	background: var(--clr-white);
	padding: 1.5rem 2rem;
	border-top-right-radius: var(--radius);
	border-bottom-left-radius: var(--radius);
	border-bottom-right-radius: var(--radius);
	position: relative;
  box-shadow: rgb(97 96 162 / 10%) 0px 2px 28px;
  width: 700px;

	header {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		column-gap: 1rem;
		margin-bottom: 1rem;
		img {
			width: 75px;
			height: 75px;
			border-radius: 50%;
		}
		h4 {
			margin-bottom: 0.25rem;
		}
		p {
			margin-bottom: 0;
		}
		a {
			color: var(--clr-primary-5);
			border: 1px solid var(--clr-primary-5);
			padding: 0.25rem 0.75rem;
			border-radius: 1rem;
			text-transform: capitalize;
			letter-spacing: var(--spacing);
			transition: var(--transition);
			cursor: pointer;
			&:hover {
				background: var(--clr-primary-5);
				color: var(--clr-white);
			}
		}
	}

	.links {
		p,
		a {
			margin-bottom: 0.25rem;
			display: flex;
			align-items: center;
			svg {
				margin-right: 0.5rem;
				font-size: 1.3rem;
			}
		}
		a {
			color: var(--clr-primary-5);
			transition: var(--transition);
			svg {
				color: var(--clr-grey-5);
			}
			&:hover {
				color: var(--clr-primary-3);
			}
		}
  }`;


export default UserCard
