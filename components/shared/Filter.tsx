"use client"

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import HomeFilters from "../home/HomeFilters";

const filterTags = [
  { name: "Newest", link: "/?filter=newest" },
  { name: "Recommended", link: "/?filter=recommended" },
  { name: "Frequent", link: "/?filter=frequent" },
  { name: "Unanswered", link: "/?filter=unanswered" },
];

interface Props {
	filters: {
		name: string,
		value: string,
	}[];
	otherClasses?: string;
	containerClasses?: string;
}

const Filter = ({ filters, otherClasses, containerClasses}: Props) => {
	return (
		<div className={`relative ${containerClasses}`}>
			<Select>
				<SelectTrigger className={`${otherClasses}
				body-regular light-border background-light800_dark300
				text-dark500_light700 border px-5 py-2.5`}>
					<div className="line-clamp-1 flex-1 text-left">
						<SelectValue placeholder="Select a Filter" />
					</div>
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{filters.map((item) => {
							return (
								<SelectItem key={item.value} value={item.value}>
									{item.name}
								</SelectItem>
							)
						})}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};

export default Filter;
