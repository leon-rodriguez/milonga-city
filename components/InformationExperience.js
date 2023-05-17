import { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';

const InformationExperience = () => {
  return (
    <div className="w-full mt-4 grid grid-cols-[3fr_2fr] gap-2 max-[720px]:grid-cols-none max-[720px]:grid-rows-[400px-auto] relative">
      <div className="min-h-[2000px] border border-red-500 pl-6 pr-6 max-[720px]:order-2">
        <div className="w-full flex">
          <button className="border-b-2 border-b-transparent focus:border-b-black cursor-pointer">
            <a>Description</a>
          </button>
          <button className="mx-6 border-b-2 border-b-transparent focus:border-b-black">
            <a
              className="border-b-2 border-b-transparent active:border-b-black "
              href="#details"
            >
              Details
            </a>
          </button>
          <button className="border-b-2 border-b-transparent focus:border-b-black cursor-pointer">
            <a
              href="#reviews"
              className="border-b-2 border-b-transparent active:border-b-black "
            >
              Reviews
            </a>
          </button>
        </div>
        <div className="mt-4">
          <div className="text-4xl font-bold">Total experience of tango</div>
          <div className="text-xl my-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make
          </div>
          <div className="text-md max-[520px]:text-sm">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here
          </div>
          <div className="text-md my-6 max-[520px]:text-sm">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there
          </div>
          <div className="text-md max-[520px]:text-sm">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock
          </div>
          <div className="text-md my-6 max-[520px]:text-sm">
            the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the word in classical
            literature, discovered the undoubtable source. Lorem Ipsum comes
            from sections 1.10.32 and 1.10
          </div>
          <div className="text-md max-[520px]:text-sm">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus
          </div>
          <div className="text-md my-6 max-[520px]:text-sm">
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic
          </div>
          <div className="text-md max-[520px]:text-sm">
            Total experience of tango
          </div>
        </div>
        <div className="mt-8 pt-8 border-t-[1px] border-t-gray-400">
          <div className="font-bold text-4xl" id="details">
            Details
          </div>
          <div className="font-bold text-lg mt-6">
            What is included in the tour?
          </div>
          <ul className="list-disc list-inside mt-4 pl-6">
            <li>Regular transport from the Hotel</li>
            <li>Group Tango lesson</li>
            <li>Dinner at the Casa de Tango with drinks</li>
            <li>Tango Show</li>
            <li>Private transfer to the Milonga</li>
            <li>Tango guide</li>
            <li>Tickets to the Milonga</li>
            <li>Welcome drink at the Milonga</li>
            <li>Transport back to the Hotel</li>
          </ul>
          <div className="font-bold text-lg mt-4">
            What is not included in the tour?
          </div>
          <ul className="list-disc list-inside mt-4 pl-6">
            <li>
              If the service is Show Only, the Tango Lesson is not included.
            </li>
            <li>Tango lessons in the Milonga</li>
            <li>Food in the Milonga</li>
          </ul>
        </div>
        <div className="mt-8 pt-8 border-t-[1px] border-t-gray-400">
          <div className="grid grid-cols-2">
            <div className="font-bold text-4xl flex items-center" id="reviews">
              Reviews
            </div>
            <div className="grid place-items-end font-bold text-xl">
              <div>8.9 / 10</div>
              <div className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div>
            <div className="max-h-[200px] w-full grid grid-cols-[1fr_4fr] mb-8 overflow-y-hidden">
              <div className=" flex justify-end font-bold pr-3">
                <div>
                  <div className=" text-right flex">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <div>05/13/23</div>
                </div>
              </div>
              <div>
                <div className="font-bold">🏴John Doe</div>
                <div className="text-md">
                  John Doe Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Curabitur tempus risus nec tortor posuere tincidunt.
                  Vivamus ut velit at ipsum laoreet vestibulum. Mauris malesuada
                  a sem eget commodo. Duis ut elit luctus, ultrices massa ut,
                  condimentum urna. Nullam id lectus vitae lacus sagittis
                  hendrerit vel sed nunc.
                </div>
              </div>
            </div>
            <div className="max-h-[200px] w-full grid grid-cols-[1fr_4fr] mb-8 overflow-y-hidden">
              <div className=" flex justify-end font-bold pr-3">
                <div>
                  <div className=" text-right flex">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <div>05/13/23</div>
                </div>
              </div>
              <div>
                <div className="font-bold">🏴John Doe</div>
                <div className="text-md">
                  John Doe Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Curabitur tempus risus nec tortor posuere tincidunt.
                  Vivamus ut velit at ipsum laoreet vestibulum. Mauris malesuada
                  a sem eget commodo. Duis ut elit luctus, ultrices massa ut,
                  condimentum urna. Nullam id lectus vitae lacus sagittis
                  hendrerit vel sed nunc. velit at ipsum laoreet vestibulum.
                  Mauris malesuada a sem eget commodo. Duis ut elit luctus,
                  ultrices massa ut, condimentum urna. Nullam id lectus vitae
                  lacus sagittis hendrerit vel sed¡velit at ipsum laoreet
                  vestibulum. Mauris malesuada a sem eget commodo. Duis ut elit
                  luctus, ultrices massa ut, condimentum urna. Nullam id lectus
                  vitae lacus sagittis hendrerit vel sed nunc.velit at ipsum
                  laoreet vestibulum. Mauris malesuada a sem eget commodo. Duis
                  ut elit luctus, ultrices massa ut, condimentum urna. Nullam id
                  lectus vitae lacus sagittis hendrerit vel sed nunc.
                </div>
              </div>
            </div>
            <div className="max-h-[200px] w-full grid grid-cols-[1fr_4fr] mb-8 overflow-y-hidden">
              <div className=" flex justify-end font-bold pr-3">
                <div>
                  <div className=" text-right flex">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <div>05/13/23</div>
                </div>
              </div>
              <div>
                <div className="font-bold">🏴John Doe</div>
                <div className="text-md">
                  John Doe Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Curabitur tempus risus nec tortor posuere tincidunt.
                  Vivamus ut velit at ipsum laoreet vestibulum. Mauris malesuada
                  a sem eget commodo. Duis ut elit luctus, ultrices massa ut,
                  condimentum urna. Nullam id lectus vitae lacus sagittis
                  hendrerit vel sed nunc.
                </div>
              </div>
            </div>
            <div className="max-h-[200px] w-full grid grid-cols-[1fr_4fr] mb-8 overflow-y-hidden">
              <div className=" flex justify-end font-bold pr-3">
                <div>
                  <div className=" text-right flex">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <div>05/13/23</div>
                </div>
              </div>
              <div>
                <div className="font-bold">🏴John Doe</div>
                <div className="text-md">
                  John Doe Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Curabitur tempus risus nec tortor posuere tincidunt.
                  Vivamus ut velit at ipsum laoreet vestibulum. Mauris malesuada
                  a sem eget commodo. Duis ut elit luctus, ultrices massa ut,
                  condimentum urna. Nullam id lectus vitae lacus sagittis
                  hendrerit vel sed nunc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[400px] border border-blue-500 grid-row max-[720px]:order-1 min-[720px]:sticky min-[720px]:top-0"></div>
    </div>
  );
};

export default InformationExperience;
