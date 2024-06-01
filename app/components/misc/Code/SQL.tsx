// Study Shark: gets user's groups
export function GroupBy() {
  return (
    <div className="cursor-text">
      <Com>get user's groups</Com>
      <Key>SELECT</Key>
      <Ind>
        <Key>DISTINCT</Key>
        <Ide>g.name</Ide>
        <Key>AS</Key>
        <Reg>title,</Reg>
      </Ind>
      <Ind>
        <Ide>g.code</Ide>
        <Key>AS</Key>
        <Reg>joinCode,</Reg>
      </Ind>
      <Ind>
        <Ope>COUNT</Ope>
        <Par>s.groupCode</Par>
        <Key>AS</Key>
        <Reg>numMaterials</Reg>
      </Ind>
      <Key>FROM</Key>
      <Ind>
        <Ope>`Group`</Ope>
        <Reg>g</Reg>
      </Ind>
      <Ind>
        <Key>LEFT JOIN</Key>
        <Reg>Shares s</Reg>
        <Key>ON</Key>
        <Ide>g.code</Ide>
        <Pun>=</Pun>
        <Ide>s.groupCode</Ide>
      </Ind>
      <Ind>
        <Key>INNER JOIN</Key>
        <Reg>Joins j</Reg>
        <Key>ON</Key>
        <Ide>g.code</Ide>
        <Pun>=</Pun>
        <Ide>j.groupCode</Ide>
      </Ind>
      <Key>WHERE</Key>
      <Ind>
        <Ide>j.username</Ide>
        <Pun>=</Pun>
        <Reg>?</Reg>
      </Ind>
      <Key>GROUP BY</Key>
      <Ind>
        <Ide>g.code</Ide>
        <Pu>;</Pu>
      </Ind>
    </div>
  );
}

export function SumLikes() {
  return (
    <div className="cursor-text">
      <Com>get sum of likes of all public topics to display</Com>
      <Key>SELECT</Key>
      <Ind>
        <Ide>T.topicId,</Ide>
      </Ind>
      <Ind>
        <Ope>sum</Ope>
        <Par>c</Par>
        <Key>AS</Key>
        <Reg>sumLikes</Reg>
      </Ind>
      <Key>FROM</Key>
      <Ind>
        <Par>
          <Ind>
            <Key>SELECT</Key>
            <Ind>
              <Ide>csm.title</Ide>
            </Ind>
            <Ind>
              <Ide>csm.topicId</Ide>
            </Ind>
            <Ind>
              <Ope>COUNT</Ope>
              <Par>
                <span className="text-[#FFE1BF]">l.topicID</span>
              </Par>
              <Key>as</Key>
              <Reg>c</Reg>
            </Ind>
            <Key>FROM</Key>
            <Ind>
              <Reg>containsStudyMaterial csm</Reg>
            </Ind>
            <Ind>
              <Key>LEFT JOIN</Key>
              <Reg>Likes l</Reg>
              <Key>ON</Key>
              <Ide>l.studyMaterialTitle</Ide>
              <Pun> = </Pun>
              <Ide>csm.title</Ide>
            </Ind>
            <Ind>
              <Key>AND</Key>
              <Ide>csm.topicID</Ide>
              <Pun> = </Pun>
              <Ide>l.topicID</Ide>
            </Ind>
            <Key>GROUP BY</Key>
            <Ind>
              <Ide>csm.title</Ide>
            </Ind>
            <Ind>
              <Ide>csm.topicId</Ide>
            </Ind>
          </Ind>
        </Par>{" "}
        <Key>as</Key>
        <Reg>T,</Reg>
        <br />
        <Reg>createsTopic t</Reg>
      </Ind>
      <Key>WHERE</Key>
      <Ind>
        <Ide>t.id</Ide>
        <Pun> = </Pun>
        <Ide>T.topicId</Ide>
      </Ind>
      <Ind>
        <Key>AND</Key>
        <Ide>t.isPublic</Ide>
        <Pun> = </Pun>
        <Reg>TRUE</Reg>
      </Ind>
      <Key>GROUP BY</Key>
      <Ind>
        <Reg>topicId;</Reg>
      </Ind>
    </div>
  );
}

// comments
function Com({ children }: { children: React.ReactNode }) {
  return <div className="text-[#5D95] italic">// {children} </div>;
}

// keyword (eg. SELECT)
function Key({ children }: { children: React.ReactNode }) {
  return <span className="text-[#1df0d7]"> {children}</span>;
}

// misc
function Reg({ children }: { children: React.ReactNode }) {
  return <span className="text-[#C3D1AE] "> {children}</span>;
}

// identifier (eg. g.name)
function Ide({ children }: { children: React.ReactNode }) {
  return <span className="text-[#FFE1BF]"> {children}</span>;
}

// operator (eg. COUNT)
function Ope({ children }: { children: React.ReactNode }) {
  return <span className="text-[#ffffff]">{children}</span>;
}

// punctuation
function Pun({ children }: { children: React.ReactNode }) {
  return <span className="text-[#FFBB6E]">{children}</span>;
}

// punctuation dif colour
function Pu({ children }: { children: React.ReactNode }) {
  return <span className="text-[#FFFFFF] opacity-[0.7]">{children}</span>;
}

// round brackets (parenthesis)
function Par({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[#FFE1BF]">
      <span className="text-[#FFBB6E]">(</span>
      {children}
      <span className="text-[#FFBB6E]">)</span>{" "}
    </span>
  );
}

// render on new paragraph with indent
function Ind({ children }: { children: React.ReactNode }) {
  return <div className="ml-[2em]">{children} </div>;
}
